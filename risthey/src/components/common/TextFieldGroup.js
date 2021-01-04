import React from "react";
import PropTypes from "prop-types";
const TextFieldGroup = ({
  name,
  placeholder,
  value,
  type,
  onChange,
  disabled,
}) => {
  return (
    <div>
      <input
        className="white-text"
        style={{ padding: "100 50px", margin: "10px", width: "380px" }}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
};

TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;
