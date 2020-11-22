const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.surname = !isEmpty(data.surname) ? data.surname : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  //   data.skills = !isEmpty(data.skills) ? data.skills : "";

  //   if (Validator.isEmpty(data.skills)) {
  //     errors.skills = "Skills field is required";
  //   }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }

  if (Validator.isEmpty(data.surname)) {
    errors.surname = "Surname field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
