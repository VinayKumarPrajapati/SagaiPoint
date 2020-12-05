const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MotherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: { type: String, required: true },
  fatherName: {
    type: String,
    required: true,
  },
  gotra: {
    type: String,
  },
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

module.exports = User = mongoose.model("mother", UserSchema);
