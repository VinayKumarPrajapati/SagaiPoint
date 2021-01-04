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
  address: {
    type: String,
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
