const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OccupationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  job: {
    type: Boolean,
  },
  postion: {
    type: Boolean,
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: "address",
  },
});

module.exports = User = mongoose.model("occupation", OccupationSchema);
