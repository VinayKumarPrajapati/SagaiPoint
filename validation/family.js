const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFamilyInput(data) {
  let errors = {};

  data.fatherName = !isEmpty(data.fatherName) ? data.fatherName : "";
  data.motherName = !isEmpty(data.motherName) ? data.motherName : "";

  if (Validator.isEmpty(data.fatherName)) {
    errors.fatherName = "Father's Name field is required";
  }

  if (Validator.isEmpty(data.motherName)) {
    errors.motherName = "Mother's Name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
