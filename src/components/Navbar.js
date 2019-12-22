import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

export default class Navbar extends Component {
  
  handleLogOut = async (event) => {
    event.preventDefault();
    try{
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }catch(error){
      console.log(error.message);
    }
    window.location = '/';
  }
  render() {
    return (
      <nav className="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation">
        
        <div id="navbarBasicExample" className="navbar-menu">

          <div className="navbar-start">
          <a href="/" className="navbar-item">
              <p className="is-size-3"><strong>Smart Responder</strong></p>
            </a>  
            
            <a href="/" className="navbar-item">
              Home
            </a>
            
            {this.props.auth.isAuthenticated && this.props.auth.user && (
            <a href="/emails" className="navbar-item">
              Sample Email Templates
            </a> 
            )}

            {this.props.auth.isAuthenticated && this.props.auth.user && (
            <a href="/emailqueue" className="navbar-item">
              My Queue
            </a>
            )}
            {this.props.auth.isAuthenticated && this.props.auth.user && (
            <a href="/foureyecheckqueue" className="navbar-item">
              4-Eye Queue
            </a>
            )}
            {this.props.auth.isAuthenticated && this.props.auth.user && (
            <a href="/changepassword" className="navbar-item">
              Change Password
            </a>
            )}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {/* It works because in JavaScript, true && expression always evaluates to expression, 
                  and false && expression always evaluates to false.
                
                Therefore, if the condition is true, the element right after && will appear in the output. 
                If it is false, React will ignore and skip it. */}
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                 <p>
                   Hello {this.props.auth.user.username}
                 </p> 
              )}
              <div className="buttons">
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" className="button is-white">
                      Register
                    </a>
                    <a href="/login" className="button is-warning">
                      Log in
                    </a>
                  </div>  
                )}
                {this.props.auth.isAuthenticated && (
                    <a href="/" onClick={this.handleLogOut} className="button is-warning">
                      Log out
                    </a>
                )} 
                </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
