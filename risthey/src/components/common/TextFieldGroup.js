import React from "react";
import PropTypes from "prop-types";
const TextFieldGroup = ({
  name,
  placeholder,
  value,
  type,
  onChange,
  disabled,
  id,
  icon,
}) => {
  return (
    <div>
      <i className="material-icons prefix">{icon}</i>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
      <label className="form-label" htmlFor="form1Example1"></label>
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
};

TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;
