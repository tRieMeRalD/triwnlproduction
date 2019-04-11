import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { googleRecaptcha, contactSubmit } from "../../actions/contactActions";

import InputGroup from "../common/InputGroup";
import TextAreaInput from "../common/TextAreaInput";

import Room from "../../img/room.jpg";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      subject: "",
      message: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const contactData = {
      email: this.state.email,
      name: this.state.name,
      subject: this.state.subject,
      message: this.state.message
    };

    this.props.contactSubmit(contactData, this.props.history);
  }

  /*  onSubmits(e) {
    e.preventDefault();

    this.props.googleRecaptcha(this.props.history);
  }
 */
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4">Contact Us</h1>
        </div>
        <div
          className="text-center pt-3"
          uk-scrollspy="cls: uk-animation-fade; repeat: true"
        >
          <h2 className="font-weight-bold">Get in touch with us today!</h2>
          <p>Send us an email and we will get back to you within 24 hours.</p>
        </div>

        <div className="container">
          <div className="row pt-2">
            <div
              className="col-sm-6"
              uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true"
            >
              <img src={Room} className="card-img" alt="..." width="100%" />
              <p className="text-muted">* = required</p>
            </div>
            <div
              className="col-sm-6 pl-4 pt-3"
              uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true"
            >
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col">
                    <InputGroup
                      forAttr="InputEmail"
                      title="* Email address"
                      types="email"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                  </div>

                  <div className="col">
                    <InputGroup
                      forAttr="InputName"
                      title="* Name"
                      types="name"
                      id="name"
                      name="name"
                      placeholder="First and Last"
                      value={this.state.name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                  </div>
                </div>

                <div className="form-group pt-3">
                  <InputGroup
                    forAttr="InputSubject"
                    title="* Subject"
                    types="subject"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={this.state.subject}
                    onChange={this.onChange}
                    error={errors.subject}
                  />
                </div>

                <div className="form-group">
                  <TextAreaInput
                    forAttr="InputMessage"
                    title="* Message"
                    types="message"
                    id="message"
                    name="message"
                    placeholder="What is your concern?"
                    onChange={this.onChange}
                    value={this.state.message}
                    error={errors.message}
                  />
                </div>

                <form>
                  <div
                    class="g-recaptcha"
                    data-sitekey="6Lcan50UAAAAAPGDC5trCYz9xa4uYPuXSy-LSSN5"
                  />
                  <br />
                  <input type="submit" class="btn btn-primary" value="Submit" />
                </form>

                {/*                 <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                /> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contactSubmit: PropTypes.func.isRequired,
  //googleRecaptcha: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { contactSubmit }
)(withRouter(Contact));
