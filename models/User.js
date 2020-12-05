const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
  },
  photo: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  height: [
    {
      ft: {
        type: Number,
      },
      inch: {
        type: Number,
      },
    },
  ],
  weight: [
    {
      kg: {
        type: Number,
      },
    },
  ],
  gender: {
    type: Boolean,
  },
  contact: {},
  password: {
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

module.exports = User = mongoose.model("users", UserSchema);
