import React from "react";
import PropTypes from "prop-types";

const RowImageLeft = ({ title, text, image }) => {
  return (
    <div
      className="row background"
      uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true"
    >
      <div className="container">
        <div className="card-group">
          <div className="col-md-6">
            <img src={image} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6">
            <div className="pl-5 pt-5">
              <h2 className="text-white">{title}</h2>
              <p className="text-white">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RowImageLeft.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

RowImageLeft.defaultProps = {
  type: "text"
};

export default RowImageLeft;
