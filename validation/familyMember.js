const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFamilyInput(data) {
  let errors = {};

  data.memberName = !isEmpty(data.memberName) ? data.memberName : "";

  if (Validator.isEmpty(data.memberName)) {
    errors.memberName = "Name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
