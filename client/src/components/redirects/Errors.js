import React, { Component } from "react";
import { Link } from "react-router-dom";

class Errors extends Component {
  render() {
    return (
      <div className="container pt-5">
        <Link to="/">&larr; Back home</Link>
        <h1 className="display-4">400 Error</h1>
        <p className="lead" style={{ paddingBottom: "550px" }}>
          There was error sending your email. Please try again later, or make
          sure that Google reCaptcha is solved.
        </p>
      </div>
    );
  }
}

export default Errors;
