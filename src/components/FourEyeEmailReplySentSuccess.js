import React, { Component } from 'react';

export default class FourEyeEmailReplySentSuccess extends  Component{
  handleShowQueue = () => {
    this.props.history.push("/foureyecheckqueue");
  }
  render(){
    return (
      <section className="section auth">
        <div className="container">
          <h1>4-Eye Approved Email Successfully!!</h1>
          <p>4-Eye Approved Email sent successfully.</p>
          <br/>
          <br/>
          <div className="control">
            <button className="button is-primary" onClick={this.handleShowQueue}>Go back to Email Queue</button>
        </div>
        </div>
      </section>
    )
  }
}
