const { default: validator } = require("validator");
const Validator = require("validator");

const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  var phoneno = /^\d{10}$/;
  var letters = /^[A-Za-z]+$/;

  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name =
      "Name must be between 2 and 30 characters (नाम 2 और 30 अक्षरों के बीच होना चाहिए)";
  }
  if (!data.name.match(letters)) {
    errors.name = "Please enter valid Name (कृपया सही नाम डालें)";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required (नाम आवश्यक है)";
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number is required (फ़ोन नंबर आवश्यक है)";
  }

  if (!data.phoneNumber.match(phoneno)) {
    errors.phoneNumber =
      "Please enter valid Phone Number (कृपया सही नंबर डालें)";
  }

  if (!data.phoneNumber.match(phoneno)) {
    errors.phoneNumber =
      "Please enter valid Phone Number (कृपया सही नंबर डालें)";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required (पासवर्ड आवश्यक है)";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password =
      "Password must be at least 6 characters (पासवर्ड कम से कम 6 अंकों का होना चाहिए)";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 =
      "Confirm Password field is required (पासवर्ड फ़ील्ड की पुष्टि करें)";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match (पासवर्ड समान होना चाहिए)";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
