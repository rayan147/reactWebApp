const express = require("express");
const router = express.Router();

const { contactQuote } = require("../contact");

router.post("/", contactQuote);

module.exports = router;
