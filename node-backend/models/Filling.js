const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FillingSchema = new Schema({
  name: {
    type: String,
    trime: true,
    required: true
  },
  date: {
    type: Date,
    defualt: Date.now
  }
});

module.exports = mongoose.model("Filling", FillingSchema);
