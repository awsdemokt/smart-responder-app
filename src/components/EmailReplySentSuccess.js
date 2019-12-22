import React, { Component } from 'react';

export default class EmailReplySentSuccess extends  Component{
  handleShowQueue = () => {
    this.props.history.push("/emailqueue");
  }
  render(){
    return (
      <section className="section auth">
        <div className="container">
          <h1>Email Sent!!</h1>
          <p>Email reply sent successfully.</p>
          <br/>
          <br/>
          <div className="control">
            <button className="button is-info" onClick={this.handleShowQueue}>Go back to Email Queue</button>
        </div>
        </div>
      </section>
    )
  }
}
