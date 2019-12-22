import React, { Component, Fragment } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import FourEyeCheckTableRecord from './FourEyeCheckTableRecord';
import axios from 'axios';
const config = require('../config.json');
export default class FourEyeCheckQueue extends Component {

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
            const res = await axios.get(`${config.api.smartresponder_frontend_api_endpoint}/smart-responder/emails-awaiting-4eyecheck`);
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
        var ws = new W3CWebSocket(`${config.api.smartresponder_websocket_api_endpoint}?screen_name=foureye_queue`);
        this.setState({ws: ws});
        ws.onopen = () => {
            console.log("connected websocket main component");
            //ws.send(JSON.stringify({"message":"registerScreen","data":"email_queue_screen"}));
            //This is how you can send data from client to server
            //ws.send(JSON.stringify({"message":"sendMessage","data":"This is King Kong"}));
        };
        ws.onmessage = message => {
            let email_object = JSON.parse(message.data);
            var new_emails_array = [email_object,...this.state.emails_records];
            const email_count = new_emails_array.length;
            this.setState({email_count: email_count, emails_records: new_emails_array, message: "New 4-Eye Check approval requested below"});
            setTimeout(this.clearMessage, 10000);
        };
        
        ws.onclose = e => {
            console.log("Socket is closed. Reconnect will be attempted");
            if(this.state.reconnectWebSocket_flag && this.state.reconnectWebSocket_flag === 'Y')
                setTimeout(this.check, 10000);
        };
    }
    check = () => {
        this.connect(); //check if websocket instance is closed, if so call `connect` function.
    };
    clearMessage = () => {
        this.setState({message: ""});
    } 
    render(){
       return (
            <Fragment>
              <section className="section">
                <div className="container">
                  <h1 className="has-text-link has-text-weight-bold">4-Eye Check - Email Approval Queue</h1>
                  <p className="subtitle is-5 has-text-link">Email responses from Travel Desk, awaiting 4-Eye Check Approval</p>
                  <br />
                  {
                      this.state.message && (
                        <table className="table is-hoverable">
                            <thead>
                                    <tr className="has-background-info">
                                        <th className="is-size-6 has-text-white">{this.state.message}</th>
                                    </tr>  
                            </thead>      
                        </table>)
                 }
                  <table className="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr className="has-background-grey">
                            <td colSpan="6" className="has-text-white has-text-weight-semibold">No.of emails awaiting 4-Eye Check Approval: &nbsp;&nbsp;&nbsp;{this.state.email_count}</td> 
                        </tr>
                        <tr className="has-background-grey">
                            <th className="has-text-white is-size-7"><abbr title="MailFrom">Customer Email</abbr></th>
                            <th className="has-text-white is-size-7"><abbr title="Subject">Subject</abbr></th>
                            <th className="has-text-white is-size-7"><abbr title="Email Date">Email Date</abbr></th>
                            <th className="has-text-white is-size-7"><abbr title="Reply Date">Reply Date</abbr></th>
                            <th className="has-text-white has-text-centered is-size-7"><abbr title="SentimentStatus">Sentiment</abbr></th>
                            <th className="has-text-white has-text-centered is-size-7">Perform 4-Eye Check</th>
                        </tr>
                    </thead>
                    <tfoot>
                    <tr className="has-background-grey">
                            <th className="has-text-white is-size-7"><abbr title="MailFrom">Customer Email</abbr></th>
                            <th className="has-text-white is-size-7"><abbr title="Subject">Subject</abbr></th>
                            <th className="has-text-white is-size-7"><abbr title="Email Date">Email Date</abbr></th>
                            <th className="has-text-white is-size-7"><abbr title="Reply Date">Reply Date</abbr></th>
                            <th className="has-text-white has-text-centered is-size-7"><abbr title="SentimentStatus">Sentiment</abbr></th>
                            <th className="has-text-white has-text-centered is-size-7">Perform 4-Eye Check</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            this.state.emails_records && this.state.emails_records.length > 0
                            ? this.state.emails_records.map(email => <FourEyeCheckTableRecord email={email} key={email.id} id={email.id} websocket={this.state.ws} parentCallback={this.setReconnectWebSocketFlag}/>) 
                            : (
                                <tr className="has-background-dark">
                                    <td colSpan="6" className="has-text-warning has-text-centered">No Pending Emails for 4-Eye Check Approval</td>
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