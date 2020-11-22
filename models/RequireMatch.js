const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequireMatchSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  married: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = RequireMatch = mongoose.model(
  "requireMatch",
  RequireMatchSchema
);
