import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextAreaInput = ({
  types,
  id,
  name,
  placeholder,
  value,
  error,
  forAttr,
  title,
  onChange
}) => {
  return (
    <div>
      <label htmlFor={forAttr}>{title}</label>
      <textarea
        type={types}
        className={classnames("form-control", {
          "is-invalid": error
        })}
        id={id}
        rows="5"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaInput.propTypes = {
  types: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  forAttr: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextAreaInput.defaultProps = {
  type: "text"
};

export default TextAreaInput;
