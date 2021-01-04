const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FatherSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = User = mongoose.model("father", FatherSchema);
