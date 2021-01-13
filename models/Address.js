const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FatherSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  town: {
    type: String,
  },
  postcode: {
    type: String,
  },
  state: {
    type: String,
  },
});

module.exports = User = mongoose.model("father", FatherSchema);
