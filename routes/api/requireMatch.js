const express = require("express");
const router = express.Router();

// @route   GET api/require-match
// @desc    Tests post route
// @access  Public
router.get("/", (req, res) => res.json({ msg: "Require Match  Works" }));

module.exports = router;
