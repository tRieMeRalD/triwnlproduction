import React from "react";
import PropTypes from "prop-types";

const CardImageTop = ({
  linkLeft,
  linkRight,
  imageLeft,
  imageRight,
  CardTitleLeft,
  CardTitleRight,
  CardTextLeft,
  CardTextRight,
  learnLeft,
  learnRight
}) => {
  return (
    <div
      className="card-deck pt-3"
      uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true"
    >
      <div className="card border-light">
        <a href={linkLeft}>
          <img
            src={imageLeft}
            className="card-img-top"
            alt="..."
            target="_blank"
          />
        </a>
        <div className="card-body">
          <h4 className="card-title font-weight-bold">{CardTitleLeft}</h4>
          <p className="card-text">{CardTextLeft}</p>
          <a href={learnLeft} className="btn btn-outline-primary">
            Learn More
          </a>
        </div>
      </div>
      <div className="card border-light">
        <a href={linkRight}>
          <img
            src={imageRight}
            className="card-img-top"
            alt="..."
            target="_blank"
          />
        </a>
        <div className="card-body">
          <h4 className="card-title font-weight-bold">{CardTitleRight}</h4>
          <p className="card-text">{CardTextRight}</p>
          <a href={learnRight} className="btn btn-outline-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

CardImageTop.propTypes = {
  linkLeft: PropTypes.string.isRequired,
  linkRight: PropTypes.string.isRequired,
  imageLeft: PropTypes.string.isRequired,
  imageRight: PropTypes.string.isRequired,
  CardTitleLeft: PropTypes.string.isRequired,
  CardTitleRight: PropTypes.string.isRequired,
  CardTextLeft: PropTypes.string.isRequired,
  CardTextRight: PropTypes.string.isRequired,
  learnLeft: PropTypes.string.isRequired,
  learnRight: PropTypes.string.isRequired
};

CardImageTop.defaultProps = {
  type: "text"
};

export default CardImageTop;
