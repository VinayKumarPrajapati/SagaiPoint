const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrotherSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = User = mongoose.model("brother", BrotherSchema);
