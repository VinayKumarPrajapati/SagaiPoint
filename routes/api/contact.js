const express = require("express");
const router = express.Router();

// @route   GET api/contact
// @desc    Tests post route
// @access  Public
router.get("/", (req, res) => res.json({ msg: "Contact  Works" }));

module.exports = router;
