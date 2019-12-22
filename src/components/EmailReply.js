import React, { Component, Fragment } from 'react';
import axios from 'axios';
import FormErrors from "./FormErrors";
import Validate from "./utility/FormValidation";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
const config = require('../config.json');
export default class EmailReply extends Component {
    state ={
        emailId: "",
        email_from:"",
        source_language_code: "",
        subject: "",
        sentiment_flag:"",
        email_text: "",
        translated_text: "",
        reply: "",
        errors: {
           blankfield: false
        }
    }
    clearErrorState = () => {
        this.setState({
            errors: {
                blankfield: false
            }
        });
    }
    handleSubmit = async event => {
        event.preventDefault();
        this.clearErrorState();
        const error = Validate(event, this.state);
        if (error) {
            this.setState({errors: { ...this.state.errors, ...error }});
        }
        if(!error)
        {
            confirmAlert({
                title: 'Confirm to Send Reply',
                message: 'Are you sure to do this?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: async () => {
                        
                        try {
                            const params = {
                                stateMachineArn: `${config.statemachine.process_travelDesk_reply_to_4eye_check_approver}`, /* required */
                                input: '{"emailId":' + '"' + this.state.emailId + '", "reply":"' + this.state.reply + '"}'
                            };
                            console.log("State Machine params is " + JSON.stringify(params));
                            const resp = await axios.post(`${config.api.smartresponder_frontend_api_endpoint}/smart-responder/move-reply-to-foureyecheck`, params);
                            console.log("Response from post method : " + JSON.stringify(resp));
                            this.props.history.push("/emailReplySentSuccess");   
                          }catch (err) {
                            console.log(`An error has occurred: ${err}`);
                          }
                    }
                  },    
                  {
                    label: 'No',
                    onClick: () => {
                        //user clicked on No
                    }
                  }
                ]
              })
        }
    };
    onInputChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
        document.getElementById(event.target.id).classList.remove("is-danger");
    }
    fetchEmail = async (emailId) => {
        console.log("Inside Fetch Email " + emailId);
        try{
            const res = await axios.get(`${config.api.smartresponder_frontend_api_endpoint}/smart-responder/fetch-email-byid`,{
                                                params: {
                                                    emailId: emailId 
                                                    }
                                                });
            //console.log(JSON.stringify(res));
            this.setState({emailId:emailId,email_from:res.data.mail_from,
                            source_language_code: res.data.source_language_code,
                            subject: res.data.subject,
                            sentiment_flag: res.data.sentiment_flag,
                            email_text: res.data.email_text,
                            translated_text: res.data.translated_text});
            //console.log(res.data.email_text);                                    
        }catch(error){
            console.log(`An error has occurred: ${error}`);
        }
    };
    async componentDidMount () {
        //TODO - Uncomment to make Smart Responder Work
        /*
        await this.fetchEmail(this.props.location.state.emailId);
        this.setState({emailId:this.props.location.state.emailId});
        */
        //TODO - Till Here
    };
    render(){
        return (
                <Fragment>
                    <section className="section">
                        <div className="container">
                            <h1>Draft Email Reply</h1>
                            <table className="table is-striped is-hoverable is-fullwidth">
                                <thead>
                                    <tr className="has-background-dark">
                                        <td className="has-text-warning">Email Id: &nbsp;&nbsp;&nbsp;{this.state.emailId}</td> 
                                        <td className="has-text-warning">Category: {this.state.sentiment_flag}</td>
                                        <td className="has-text-warning">Customer Email: {this.state.email_from}</td>
                                    </tr>
                                </thead>
                            </table>                
                            <FormErrors formerrors={this.state.errors} />
                            <form onSubmit={this.handleSubmit}>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Customer Email</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control is-expanded has-icons-left">
                                                <input className="input has-background-grey-lighter" readOnly type="text" placeholder="Customer Email" value={this.state.email_from}/>
                                                <span className="icon is-small has-text-grey-dark is-left">
                                                <i className="fas fa-envelope"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Your Email</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control is-expanded has-icons-left">
                                                <input className="input has-background-grey-lighter" readOnly type="text" placeholder="Your Email" value="traveldesk@skillsreinvent.com"/>
                                                <span className="icon is-small has-text-grey-dark is-left">
                                                <i className="fas fa-envelope"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Original Language</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control is-expanded has-icons-left">
                                                <input className="input has-background-grey-lighter" readOnly type="text" placeholder="Your Email" value={this.state.source_language_code}/>
                                                <span className="icon is-small has-text-grey-dark is-left">
                                                <i className="fas fa-language"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Subject</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                        <div className="control">
                                            <input className="input has-background-grey-lighter" readOnly type="text" placeholder="Subject" value={this.state.subject}/>
                                        </div>
                                       </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Email Sentiment</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                        <div className="control">
                                            {
                                                this.state.sentiment_flag && this.state.sentiment_flag === 'Negative' ? 
                                                <input className="input is-danger has-background-danger has-text-white" type="text" placeholder="Email Sentiment" value={this.state.sentiment_flag}/> :
                                                this.state.sentiment_flag === 'Positive' ? <input className="input is-success has-background-success has-text-white" type="text" placeholder="Email Sentiment" value={this.state.sentiment_flag}/> :
                                                this.state.sentiment_flag === 'Neutral' ? <input className="input is-primary has-background-primary has-text-white" type="text" placeholder="Email Sentiment" value={this.state.sentiment_flag}/> :
                                                <input className="input is-warning has-background-warning has-text-white" readOnly type="text" placeholder="Email Sentiment" value={this.state.sentiment_flag}/>
                                            }
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Original Email</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                        <div className="control">
                                        <textarea className="textarea has-background-grey-lighter" readOnly placeholder="Explain how we can help you" value={this.state.email_text}></textarea>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Translated Email</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                        <div className="control">
                                        <textarea className="textarea has-background-grey-lighter" readOnly placeholder="Explain how we can help you" value={this.state.translated_text}></textarea>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label is-">Your Reply</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                        <div className="control">
                                        <textarea className="textarea" value={this.state.reply} id="reply" onChange={this.onInputChange} placeholder="Explain how we can help you"></textarea>
                                        </div>
                                        <p className="help is-danger">
                                            This field is required
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-label">
                                    
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                        <div className="control">
                                            <button className="button is-info">
                                            Send Reply
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </Fragment> 
        )
    }
}