import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

import { getContacts, deleteContact } from "../../actions/contactActions";

import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/adminActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  onDeleteClick(id) {
    this.props.deleteContact(id);
  }

  onLogoutClick(e) {
    e.preventDefault();

    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { contacts } = this.props.contact;
    let contactContent;

    if (contacts === null) {
      contactContent = <h1>Empty!</h1>;
    } else {
      if (contacts.length > 0) {
        contactContent = contacts.map(contact => (
          <tr key={contact._id}>
            <td>
              <Moment format="YYYY/MM/DD">{contact.date}</Moment>
            </td>
            <td>{contact.name}</td>
            <td>{contact.emailAddress}</td>
            <td>
              {contact.subject.length > 20
                ? contact.subject.substr(0, 20).replace(/\w+[.!?]?$/, ". . .")
                : contact.subject}
            </td>
            <td>
              {contact.message.length > 40
                ? contact.message.substr(0, 35).replace(/\w+[.!?]?$/, ". . .")
                : contact.message}
            </td>
            <td>
              <button
                onClick={this.onDeleteClick.bind(this, contact._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ));
      } else {
        contactContent = <h4>No contacts found!</h4>;
      }
    }

    return (
      <div className="container pt-5" style={{ marginBottom: "150px" }}>
        <a href="#" onClick={this.onLogoutClick.bind(this)}>
          &larr; Logout
        </a>

        <h1 className="pb-3">Contact Dashboard</h1>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{contactContent}</tbody>
        </table>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { getContacts, deleteContact, clearCurrentProfile, logoutUser }
)(Dashboard);
