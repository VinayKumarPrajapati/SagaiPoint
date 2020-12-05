const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FatherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: { type: String, required: true },

  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("father", UserSchema);
