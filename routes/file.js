const express = require("express");
const router = express.Router();

const { upload, storage } = require("../setupProxy");

router.post(
  "/",
  upload(req, res, err => {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file); //Here you get file.
    /*Now do where ever you want to do*/
    if (!err) return res.send(200).end();
  })
);

module.exports = router;
