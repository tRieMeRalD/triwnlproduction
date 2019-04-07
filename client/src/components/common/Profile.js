import React from "react";
import PropTypes from "prop-types";

const Profile = ({ scrollspy, name, status, image }) => {
  return (
    <div className="card border-light" uk-scrollspy={scrollspy}>
      <img src={image} className="card-img-top rounded-circle" alt="..." />
      <div className="card-body text-center">
        <h3 className="card-title font-weight-bold">{name}</h3>
        <p className="card-text">{status}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  scrollspy: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

Profile.defaultProps = {
  type: "text"
};

export default Profile;
