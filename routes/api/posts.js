const express = require("express");
const router = express.Router();

//@route  GET api/posts/test
//@desc   TEST post route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Posts worked" }));
module.exports = router;
