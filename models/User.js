const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
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
  photos: {
    type: Array,
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
  married: { type: String, enum: ["YES", "WITH-CHILD", "NO"], default: "NO" },
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
  contactDetails: {
    type: Schema.Types.ObjectId,
    ref: "contact",
  },
  familyDetails: {
    type: Schema.Types.ObjectId,
    ref: "family",
  },
  educationDetails: {
    type: Schema.Types.ObjectId,
    ref: "education",
  },
  occupationDetails: {
    type: Schema.Types.ObjectId,
    ref: "occupation",
  },
  canCook: {
    type: Schema.Types.ObjectId,
    ref: "cook",
  },
  hobby: [{ type: [String] }],
  likings: [{ type: [String] }],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
