import React, { Component } from "react";
import { Link } from "react-router-dom";

class Success extends Component {
  render() {
    return (
      <div className="container pt-5">
        <Link to="/">&larr; Back home</Link>
        <h1 className="display-4">Email sent successfully!</h1>
        <p className="lead" style={{ paddingBottom: "550px" }}>
          Thank you for contacting us, we will get back to you within 24 hours.
          If not, please send us another email and we will try to get back to
          you as soon as possible.
        </p>
      </div>
    );
  }
}

export default Success;
