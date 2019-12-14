const multer = require("multer");
const express = require("express");
const router = express.Router();
const fileUploadHandler = require("../controllers/upwithmulter");

const upload = multer({ dest: "/tmp" });

router.post("/file-upload", upload.any(), fileUploadHandler);

module.exports = router;
