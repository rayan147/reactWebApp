const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImgSchema = new Schema({
  img: {
    data: Buffer,
    type: String
  }
});
const Img = mongoose.model("Images", ImgSchema);
module.exports = Img;
