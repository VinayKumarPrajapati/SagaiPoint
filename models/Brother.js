const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BrotherSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  job: {
    type: Boolean,
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

module.exports = User = mongoose.model("brother", UserSchema);
