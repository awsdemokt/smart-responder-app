import React from "react";

function FormErrors(props) {
  if (
    props.formerrors &&
    (props.formerrors.blankfield || props.formerrors.passwordmatch)
  ) {
    return (
      <div className="error container help is-danger">
        <div className="row justify-content-center">
          {props.formerrors.passwordmatch
            ? "Password value does not match confirm password value"
            : ""}
        </div>
        <div className="row justify-content-center help is-size-6 is-danger">
          {props.formerrors.blankfield ? "** Fields outlined in Red are required" : ""}
        </div>
      </div>
    );
  } else if (props.apierrors) {
    return (
      <div className="error container help is-danger">
        <div className="row justify-content-center">{props.apierrors}</div>
      </div>
    );
  } else if (props.formerrors && props.formerrors.cognito) {
    return (
      <div className="error container help is-danger">
        <div className="row justify-content-center">
          {props.formerrors.cognito.message}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default FormErrors;