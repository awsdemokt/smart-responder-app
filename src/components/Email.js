import React, { Component} from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import UserActionsAcknowledgement from "./UserActionsAcknowledgement";
const config = require('../config.json');

export default class Email extends Component{
    state ={
        loading: true,
        acknowledgement_success_message: "",
        acknowledgement_failure_message: ""
    }
    clearAcknowlegementMessageState = () => {
        this.setState({acknowledgement_success_message: "", acknowledgement_failure_message: ""});
    }
    tryOutThisEmail = (id,event) => {
        //TODO - Uncomment to make Smart Responder Work
        /*
        this.clearAcknowlegementMessageState();
        confirmAlert({
            title: 'Confirm to Send Email',
            message: 'Are you sure to do this?',
            buttons: [
              {
                label: 'Yes',
                onClick: async () => {
                    try {
                        const params = {
                          "id": id
                        };
                        const resp = await axios.post(`${config.api.smartresponder_frontend_api_endpoint}/smart-responder/test-sample-email`, params);
                        console.log("Response from post method : " + resp);
                        this.setState({acknowledgement_success_message: "Email has been sent successfully."});
                      }catch (err) {
                        console.log(`An error has occurred: ${err}`);
                      }
                }
              },    
              {
                label: 'No',
                onClick: () => {
                    
                }
              }
            ]
          })
          */
         //TODO - Till Here
    }
    render(){
        var extremeArray = this.props.emailMap.get("Extreme");
        var mildArray = this.props.emailMap.get("Mild");
        var neutralArray = this.props.emailMap.get("Neutral");
        var positiveArray = this.props.emailMap.get("Happy");
       
        return (
          <>
            <UserActionsAcknowledgement success_message={this.state.acknowledgement_success_message} failure_message={this.state.acknowledgement_success_message}/>
            <div className="columns">
                <div className="column">
                    <div className="card">
                        <header className="card-header has-background-danger">
                            <p className="card-header-title has-text-white">
                                { extremeArray && extremeArray.length > 0 ? extremeArray[0].category : "Loading" }
                                &nbsp;&nbsp;&nbsp;(Language - { extremeArray && extremeArray.length > 0 ? extremeArray[0].language : "Loading" })
                            </p>
                            <a href="#" className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-frown fa-2x has-text-white" aria-hidden="true"></i>
                            </span>
                            </a>
                        </header> 
                        <div className="card-content is-size-7">
                            <p>
                            { extremeArray && extremeArray.length > 0 ? extremeArray[0].emailtext : "Loading" }    
                            </p>
                            <p>
                            <br/>
                            From:&nbsp;&nbsp;&nbsp;
                            { extremeArray && extremeArray.length > 0 ? extremeArray[0].from : "Loading" }    
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <button className="button is-small is-danger" onClick={event => this.tryOutThisEmail(extremeArray[0].id, event)}>Send Email</button>
                            </p>
                        </footer>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <header className="card-header has-background-danger">
                            <p className="card-header-title has-text-white">
                                { extremeArray && extremeArray.length > 0 ? extremeArray[1].category : "Loading" }
                                &nbsp;&nbsp;&nbsp;(Language - { extremeArray && extremeArray.length > 0 ? extremeArray[1].language : "Loading" })
                            </p>
                            <a href="#" className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-frown fa-2x has-text-white" aria-hidden="true"></i>
                            </span>
                            </a>
                        </header> 
                        <div className="card-content is-size-7">
                            <p>
                            { extremeArray && extremeArray.length > 0 ? extremeArray[1].emailtext : "Loading" }    
                            </p>
                            <p>
                            <br/>
                            From:&nbsp;&nbsp;&nbsp;
                            { extremeArray && extremeArray.length > 0 ? extremeArray[1].from : "Loading" }    
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <button className="button is-small is-danger" onClick={event => this.tryOutThisEmail(extremeArray[1].id, event)}>Send Email</button>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="card">
                        <header className="card-header has-background-warning">
                            <p className="card-header-title has-text-dark">
                                { mildArray && mildArray.length > 0 ? mildArray[0].category : "Loading" }
                                &nbsp;&nbsp;&nbsp;(Language - { mildArray && mildArray.length > 0 ? mildArray[0].language : "Loading" })
                            </p>
                            <a href="#" className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-frog fa-2x has-text-dark" aria-hidden="true"></i>
                            </span>
                            </a>
                        </header> 
                        <div className="card-content is-size-7">
                            <p>
                                { mildArray && mildArray.length > 0 ? mildArray[0].emailtext : "Loading" }    
                                </p>
                                <p>
                                <br/>
                                From:&nbsp;&nbsp;&nbsp;
                                { mildArray && mildArray.length > 0 ? mildArray[0].from : "Loading" }    
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <button className="button is-small is-warning" onClick={event => this.tryOutThisEmail(mildArray[0].id, event)}>Send Email</button>
                            </p>
                        </footer>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <header className="card-header has-background-warning">
                            <p className="card-header-title has-text-dark">
                                { mildArray && mildArray.length > 0 ? mildArray[1].category : "Loading" }
                                &nbsp;&nbsp;&nbsp;(Language - { mildArray && mildArray.length > 0 ? mildArray[1].language : "Loading" })
                            </p>
                            <a href="#" className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-frog fa-2x has-text-dark" aria-hidden="true"></i>
                            </span>
                            </a>
                        </header> 
                        <div className="card-content is-size-7">
                            <p>
                                { mildArray && mildArray.length > 0 ? mildArray[1].emailtext : "Loading" }    
                                </p>
                                <p>
                                <br/>
                                From:&nbsp;&nbsp;&nbsp;
                                { mildArray && mildArray.length > 0 ? mildArray[1].from : "Loading" }    
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <button className="button is-small is-warning" onClick={event => this.tryOutThisEmail(mildArray[1].id, event)}>Send Email</button>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>


            <div className="columns">
                <div className="column">
                    <div className="card">
                        <header className="card-header has-background-info">
                            <p className="card-header-title has-text-white">
                                { neutralArray && neutralArray.length > 0 ? neutralArray[0].category : "Loading" }
                                &nbsp;&nbsp;&nbsp;(Language - { neutralArray && neutralArray.length > 0 ? neutralArray[0].language : "Loading" })
                            </p>
                            <a href="#" className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-meh fa-2x has-text-white" aria-hidden="true"></i>
                            </span>
                            </a>
                        </header> 
                        <div className="card-content is-size-7">
                            <p>
                                { neutralArray && neutralArray.length > 0 ? neutralArray[0].emailtext : "Loading" }    
                                </p>
                                <p>
                                <br/>
                                From:&nbsp;&nbsp;&nbsp;
                                { neutralArray && neutralArray.length > 0 ? neutralArray[0].from : "Loading" }    
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <button className="button is-small is-info" onClick={event => this.tryOutThisEmail(neutralArray[0].id, event)}>Send Email</button>
                            </p>
                        </footer>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <header className="card-header has-background-info">
                            <p className="card-header-title has-text-white">
                                { neutralArray && neutralArray.length > 0 ? neutralArray[1].category : "Loading" }
                                &nbsp;&nbsp;&nbsp;(Language - { neutralArray && neutralArray.length > 0 ? neutralArray[1].language : "Loading" })
                            </p>
                            <a href="#" className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-meh fa-2x has-text-white" aria-hidden="true"></i>
                            </span>
                            </a>
                        </header> 
                        <div className="card-content is-size-7">
                            <p>
                                { neutralArray && neutralArray.length > 0 ? neutralArray[1].emailtext : "Loading" }    
                                </p>
                                <p>
                                <br/>
                                From:&nbsp;&nbsp;&nbsp;
                                { neutralArray && neutralArray.length > 0 ? neutralArray[1].from : "Loading" }    
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <button className="button is-small is-info" onClick={event => this.tryOutThisEmail(neutralArray[1].id, event)}>Send Email</button>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="column">
                    <div className="card">
                        <header className="card-header has-background-success">
                            <p className="card-header-title has-text-white">
                                { positiveArray && positiveArray.length > 0 ? positiveArray[0].category : "Loading" }  
                                &nbsp;&nbsp;&nbsp;(Language - { positiveArray && positiveArray.length > 0 ? positiveArray[0].language : "Loading" })
                            </p>
                            <a href="#" className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-smile fa-2x has-text-white" aria-hidden="true"></i>
                            </span>
                            </a>
                        </header> 
                        <div className="card-content is-size-7">
                            <p>
                                { positiveArray && positiveArray.length > 0 ? positiveArray[0].emailtext : "Loading" }    
                                </p>
                                <p>
                                <br/>
                                From:&nbsp;&nbsp;&nbsp;
                                { positiveArray && positiveArray.length > 0 ? positiveArray[0].from : "Loading" }    
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <button className="button is-small is-success" onClick={event => this.tryOutThisEmail(positiveArray[0].id, event)}>Send Email</button>  
                            </p>

                        </footer>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <header className="card-header has-background-success">
                            <p className="card-header-title has-text-white">
                                { positiveArray && positiveArray.length > 0 ? positiveArray[1].category : "Loading" }  
                                &nbsp;&nbsp;&nbsp;(Language - { positiveArray && positiveArray.length > 0 ? positiveArray[1].language : "Loading" })
                            </p>
                            <a href="#" className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-smile fa-2x has-text-white" aria-hidden="true"></i>
                                
                            </span>
                            </a>
                        </header> 
                        <div className="card-content is-size-7">
                            <p>
                                { positiveArray && positiveArray.length > 0 ? positiveArray[1].emailtext : "Loading" }    
                                </p>
                                <p>
                                <br/>
                                From:&nbsp;&nbsp;&nbsp;
                                { positiveArray && positiveArray.length > 0 ? positiveArray[1].from : "Loading" }    
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <button className="button is-small is-success" onClick={event => this.tryOutThisEmail(positiveArray[1].id, event)}>Send Email</button>  
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </>    
        )
    }
}   