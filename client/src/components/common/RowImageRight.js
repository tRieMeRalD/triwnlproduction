import React from "react";
import PropTypes from "prop-types";

const RowImageRight = ({ title, text, image }) => {
  return (
    <div
      className="row bg-primary"
      uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true"
    >
      <div className="container">
        <div className="card-group">
          <div className="col-md-6">
            <div className="pt-5 pr-3">
              <h2 className="text-white">{title}</h2>
              <p className="text-white">{text}</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={image} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

RowImageRight.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

RowImageRight.defaultProps = {
  type: "text"
};

export default RowImageRight;
