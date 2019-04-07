import React from "react";
import PropTypes from "prop-types";

const CardImageRight = ({ image, cardBody, cardText }) => {
  return (
    <div
      className="card border-light"
      uk-scrollspy="cls: uk-animation-slide-right; repeat: true"
      style={{ maxWidth: "540px" }}
    >
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-title font-weight-bold">{cardBody}</div>
            <p className="card-text">{cardText}</p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={image} className="card-img pt-3" alt="..." />
        </div>
      </div>
    </div>
  );
};

CardImageRight.propTypes = {
  image: PropTypes.string.isRequired,
  cardBody: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired
};

CardImageRight.defaultProps = {
  type: "text"
};

export default CardImageRight;
