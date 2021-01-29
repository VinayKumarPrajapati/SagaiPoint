const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const contact = require("./routes/api/contact");
const family = require("./routes/api/family");
// const familyMember = require("./routes/api/familyMember");
const requireMatch = require("./routes/api/requireMatch");
const matchFound = require("./routes/api/matchFound");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/family", family);
// app.use("/api/family-member", familyMember);
app.use("/api/contact", contact);
app.use("/api/require-match", requireMatch);
app.use("/api/match-found", matchFound);

//Server Static Assets if in production
if (process.env.NODE_ENV === "production") {
  //Set Static Folder
  app.use(express.static("risthey/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "risthey", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
