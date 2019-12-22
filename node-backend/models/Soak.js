const mongoose = require("mongoose");

const SoakSchema = mongoose.Schema({
  name: {
    _id: mongoose.Schema.Types.ObjectId,
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    defualt: Date.now
  }
});

module.exports = mongoose.model("Soak", SoakSchema);
