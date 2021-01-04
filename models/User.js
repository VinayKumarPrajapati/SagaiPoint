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
  salaryIncome: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  height: [
    {
      cm: {
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
  canDrive: {
    type: String,
    enum: ["TWO-WHEELER", "FOUR-WHEELER", "NO"],
    default: "NO",
  },
  occupationStatus: {
    type: String,
    enum: ["JOB", "BUSINESS", "STUDY", "IDLE"],
    default: "IDLE",
  },
  married: {
    type: Boolean,
  },
  marriedWithChild: {
    type: Boolean,
  },
  tad: {
    type: String,
  },
  district: {
    type: String,
  },
  handicap: {
    type: Boolean,
  },
  specs: {
    type: Boolean,
  },
  manglik: {
    type: Boolean,
  },
  suni: {
    type: Boolean,
  },
  gotra: {
    type: Boolean,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  contactDetails: {
    type: Schema.Types.ObjectId,
    ref: "contact",
  },
  familyDetails: {
    type: Schema.Types.ObjectId,
    ref: "family",
  },
  hobby: [{ type: [String] }],
  likings: [{ type: [String] }],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
