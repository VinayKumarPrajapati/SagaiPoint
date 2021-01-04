const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SisterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = User = mongoose.model("sister", SisterSchema);
