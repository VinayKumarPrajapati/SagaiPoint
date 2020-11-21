const express = require("express");
const router = express.Router();

//@route  GET api/requiredMatch/test
//@desc   TEST requiredMatch route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "requiredMatch worked" }));
module.exports = router;
