const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FamilyMemberSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  motherFatherName: {
    type: String,
  },
  totalFamilyMember: {
    type: Number,
  },
  motherTad: { type: String },
  motherDistrict: { type: String },
  motherGotra: {
    type: Number,
  },

  familyIncome: {
    type: Number,
  },
  contactDetails: {
    type: Schema.Types.ObjectId,
    ref: "contact",
  },
  brother: { type: Schema.Types.ObjectId, ref: "brother" },
  sister: { type: Schema.Types.ObjectId, ref: "sister" },
  user: {
    type: Schema.Types.ObjectId,
    ref: "father",
  },
});

module.exports = User = mongoose.model("family", FamilyMemberSchema);
