const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ phoneNumber: req.body.phoneNumber }).then((user) => {
    if (user) {
      errors.phoneNumber =
        "Phone number already exists. if you have not registered already contact us. at 6239009974 (फ़ोन नंबर पहले से मौजूद है। यदि आपने रजिस्टर नहीं किया है तो हमसे संपर्क करें। 6239009974 पर)";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,

        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;

  // Find user by phoneNumber
  User.findOne({ phoneNumber }).then((user) => {
    // Check for user
    if (!user) {
      errors.phoneNumber = "User not found (यह फ़ोन नंबर रजिस्टर नहीं है)";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password incorrect (गलत पासवर्ड)";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      phoneNumber: req.user.phoneNumber,
    });
  }
);

module.exports = router;
