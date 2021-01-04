const express = require("express");
const { profile_url } = require("gravatar");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Required Match
// const MatchFound = require("../../models/MatchFound");

//Load User Profile
const User = require("../../models/User");

// @route   GET api/match-found
// @desc    Tests post route
// @access  Public
router.get("/", (req, res) => res.json({ msg: "MatchFound  Works" }));

// @route   GET api/match-found
// @desc    Get Current User Match
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: male });
  }
);

module.exports = router;
