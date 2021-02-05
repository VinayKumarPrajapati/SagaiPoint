const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    phoneNumber2: {
      type: Number,
    },
    email: {
      type: String,
    },
    surname: {
      type: String,
      // required: true,
    },
    photo: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("users", UserSchema);
