import React, { Component, Fragment } from 'react';
import axios from "axios";
import Email from './Email';
import Hero from './Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const config = require('../config.json');

export default class Emails extends Component {
    state = {
        emails: [],
        emailMap: new Map()
    }
    fetchEmails = async () => {
        
        try{
            const res = await axios.get(`${config.api.smartresponder_frontend_api_endpoint}/smart-responder/fetch-sample-emails`);
            const emails = res.data;
            this.setState({emails: emails});
        }catch(error){
            console.log(`An error has occured: ${error}`);
        }
    }
    componentDidMount = async () => {
        //TODO - Uncomment to make Smart Responder Work
       /*
        await this.fetchEmails();
        await this.listEmails();
        */
       //TODO - Till Here
    }
    listEmails = async () => {
        const {emails} = this.state;
        var emailMap = new Map();
        for(let i = 0; i < emails.length; i++){
            let emailRecord = emails[i];
            let category = emailRecord.category;
            let emailArray = emailMap.get(category);
            if(!emailArray)
                emailArray = [];
            emailArray.push(emailRecord);
            emailMap.set(category,emailArray);
        }
        this.setState({emailMap: emailMap});        
    }
    render() {
        return (
            <Fragment>
               <section className="section">
                <div className="container">
                    <h1>Sample Email Templates</h1>
                    <p className="sub-title is-size-5">Templates in different languages. <strong>Color legends</strong> show email categories&nbsp;&nbsp; 
                        <span className="tag is-danger">
                            Extreme Negative Sentiments
                        </span>&nbsp;&nbsp;
                        <span className="tag is-warning">
                            Mild Negative Sentiments
                        </span>&nbsp;&nbsp;
                        <span className="tag is-info">
                            Neutral Sentiments
                        </span>&nbsp;&nbsp;
                        <span className="tag is-success">
                            Positive Sentiments
                        </span>
                    </p>
                    <br/><br/>
                   {
                       //this is where email samples have to come.
                       <Email emailMap={this.state.emailMap}/>
                   }
                </div>
                </section> 
            </Fragment>
        )
    }
}