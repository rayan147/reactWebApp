const express = require("express");
const router = express.Router();

const { contactQuote } = require("../controllers/contact");

router.post("/", contactQuote);

module.exports = router;
