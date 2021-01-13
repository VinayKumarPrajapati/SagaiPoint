const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Contact Schema
const ContactSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },

  email: { type: String },

  contactNumber: {
    type: Number,
  },
  addressDetails: {
    type: Schema.Types.ObjectId,
    ref: "address",
  },
  currentAddress: {
    type: String,
  },
  workAddress: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("contact", UserSchema);
