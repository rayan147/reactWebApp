const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlavorSchema = new Schema({
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

module.exports = mongoose.model("Flavor", FlavorSchema);
