const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BusinessSchema = new Schema({
  name: {
    type: String,
  },
  field: { type: String },

  income: {
    type: String,
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
