const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    defualt: Date.now
  }
});

module.exports = mongoose.model("Message", MessageSchema);
