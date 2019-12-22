import React from "react";

function UserActionsAcknowledgement(props) {
  if (props.success_message) {
    return (
      <div className="error container help is-primary">
        <div className="row justify-content-center is-size-4 has-text-info has-text-centered has-text-weight-semibold">
          {props.success_message}
        </div>
      </div>
    );
  }
  else if(props.failure_message) {
    return (
      <div className="error container help is-danger">
        <div className="row justify-content-center is-size-4 has-text-info has-text-centered has-text-weight-semibold">
          {props.failure_message}
        </div>
      </div>
    ); 
  }
  else {
    return <div />;
  }
}
export default UserActionsAcknowledgement;