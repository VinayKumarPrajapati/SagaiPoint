const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const RequireMatch = require("../../models/RequireMatch");
//@route  GET api/requiredMatch/test
//@desc   TEST requiredMatch route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "requiredMatch worked" }));

//@route  POST api/requiredMatch
//@desc   Requirements for Match
//@access Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newMatch = new RequireMatch({
      married: req.body.married,
      user: req.body.id,
    });

    newMatch.save().then((post) => res.json(newMatch));
  }
);

//@route  GET api/requiredMatch
//@desc   Requirements for Match
//@access Private
router.get("/", (req, res) => {
  RequireMatch.find()
    .sort({ date: -1 })
    .then((requirements) => res.json(requirements))
    .catch((err) => res.status(404));
});

module.exports = router;
