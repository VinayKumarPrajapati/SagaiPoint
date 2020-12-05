const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  field: { type: String, required: true },

  income: {
    type: String,
    required: true,
  },
  years: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("business", UserSchema);
