import React, { Component, Fragment } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import EmailTableRecord from './EmailTableRecord'
import axios from 'axios';
const config = require('../config.json');
export default class EmailQueue extends Component {

    state = {
        email_count: 0,
        message: "",
        emails_records: [],
        ws: null,
        reconnectWebSocket_flag: 'Y'
    }
    componentDidMount() {
        //TODO - Uncomment to make Smart Responder Work
        /*
        this.connect();
        this.fetchEmails();
        */
       //TODO - Till Here
    }
    fetchEmails = async () => {
        try{
            const res = await axios.get(`${config.api.smartresponder_frontend_api_endpoint}/smart-responder/received-emails`);
            const emails_records = res.data;
            const email_count = emails_records ? emails_records.length : 0;
            this.setState({ emails_records: emails_records,email_count: email_count});
        }catch(error){
            console.log(`An error has occurred: ${error}`);
        }
    }
    setReconnectWebSocketFlag = (flag) => {
        this.setState({reconnectWebSocket_flag:flag});
    }
    connect = () => {
        console.log("Inside connect function of Email Queue");
        var ws = new W3CWebSocket(`${config.api.smartresponder_websocket_api_endpoint}?screen_name=email_queue`);
        this.setState({ws: ws});
        ws.onopen = () => {
            console.log("connected websocket main component");
            //ws.send(JSON.stringify({"message":"registerScreen","data":"email_queue_screen"}));
            //This is how you can send data from client to server
            //ws.send(JSON.stringify({"message":"sendMessage","data":"This is King Kong"}));
        };
        ws.onmessage = message => {
            console.log("Method onMessage Called " + JSON.stringify(message));
            let email_object = JSON.parse(message.data);
            console.log("email object " + email_object);
            var new_emails_array = [email_object,...this.state.emails_records];
            const email_count = new_emails_array.length;
            this.setState({email_count: email_count, emails_records: new_emails_array, message: "You've got a New Email!"});
            setTimeout(this.clearMessage, 10000);
        };
        ws.onclose = e => {
            console.log("Socket is closed. Reconnect will be attempted " + JSON.stringify(e));
            if(this.state.reconnectWebSocket_flag && this.state.reconnectWebSocket_flag === 'Y')
                setTimeout(this.check, 10000);
        };
    }
    check = () => {
        console.log("Inside check");
        this.connect(); //check if websocket instance is closed, if so call `connect` function.
    };
    clearMessage = () => {
        console.log("Inside Clear Message");
        this.setState({message: ""});
    } 
    render(){
       return (
            <Fragment>
              <section className="section">
                <div className="container">
                  <h1>My Email Queue</h1>
                  <p className="subtitle is-5">Emails that have been sent by customers with sentiment scores</p>
                  <br />
                  {
                      this.state.message && (
                        <table className="table is-hoverable">
                            <thead>
                                    <tr className="has-background-warning">
                                        <th className="is-size-6 has-text-dark">{this.state.message}</th>
                                    </tr>  
                            </thead>      
                        </table>)
                 }
                  <table className="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr className="has-background-dark">
                            <td colSpan="6" className="has-text-warning">No.of emails received: &nbsp;&nbsp;&nbsp;{this.state.email_count}</td> 
                        </tr>
                        <tr className="has-background-dark">
                            <th className="has-text-white is-size-7"><abbr title="MailFrom">From</abbr></th>
                            <th className="has-text-white is-size-7"><abbr title="Subject">Subject</abbr></th>
                            <th className="has-text-white is-size-7">Date</th>
                            <th className="has-text-white is-size-7" width={700}><abbr title="TranslatedText">Translated Email Text</abbr></th>
                            <th className="has-text-white has-text-centered is-size-7"><abbr title="SentimentStatus">Sentiment</abbr></th>
                            <th className="has-text-white has-text-centered is-size-7">Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr className="has-background-dark">
                            <th className="has-text-white is-size-7"><abbr title="MailFrom">From</abbr></th>
                            <th className="has-text-white is-size-7"><abbr title="Subject">Subject</abbr></th>
                            <th className="has-text-white is-size-7">Date</th>
                            <th className="has-text-white is-size-7"><abbr title="TranslatedText">Translated Email Text</abbr></th>
                            <th className="has-text-white has-text-centered is-size-7"><abbr title="SentimentStatus">Sentiment</abbr></th>
                            <th className="has-text-white has-text-centered is-size-7">Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            this.state.emails_records && this.state.emails_records.length > 0
                            ? this.state.emails_records.map(email => <EmailTableRecord email={email} key={email.id} id={email.id} websocket={this.state.ws} parentCallback={this.setReconnectWebSocketFlag}/>) 
                            : (
                                <tr className="has-background-dark">
                                    <td colSpan="6" className="has-text-warning has-text-centered">No Pending Emails</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
              </section>
            </Fragment>
        )     
    }
}