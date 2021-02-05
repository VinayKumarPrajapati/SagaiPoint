const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  var phoneno = /^\d{10}$/;

  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber =
      "Phone number field is required  (फ़ोन नंबर आवश्यक है)";
  }

  if (!data.phoneNumber.match(phoneno)) {
    errors.phoneNumber =
      "Please enter valid Phone Number (कृपया सही नंबर डालें)";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required (पासवर्ड आवश्यक है)";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
