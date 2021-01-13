const Validator = require("validator");
const isEmpty = require("./is-empty");
const validatePhoneNumber = require("validate-phone-number-node-js");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number field is required";
  }

  if (!validatePhoneNumber.validate(data.phoneNumber)) {
    errors.phoneNumber = "Please enter valid Phone Number";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
