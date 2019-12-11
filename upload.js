const sendEmail = require("./utils/sendEmail");

exports.uploadfile = (req, res, next) => {
  if (req.files === null) {
    return res.status(404).json({ msg: "No file was uploaded" });
  }

  //convert file to base64
  const base64Image = req.files.file.data.toString("base64");

  const output = `
   <li>Images:<img src="data:image/*;base64,${base64Image}"/></li>`;
  try {
    sendEmail({
      output
    });
  } catch (error) {
    console.log(error);
  }
  next();
};
