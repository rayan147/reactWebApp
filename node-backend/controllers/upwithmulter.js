module.exports = (req, res) => {
  for (let i = 0; i < req.files.length; i += 1) {
    console.log(
      `File ${req.files[i].originalname} uploaded to ${req.files[i].path}`
    );
  }

  return res.status(200).send({ success: true });
};
