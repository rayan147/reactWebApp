const express = require("express");
const router = express.Router();

const {
  getMessages,
  getaSingleMessage,
  addMessage,
  deleteMessage,
  updateMessage
} = require("../controllers/message");

router
  .route("/")
  .get(getMessages)
  .get(getaSingleMessage)
  .post(addMessage);
router
  .route("/:id")
  .put(updateMessage)
  .delete(deleteMessage);

module.exports = router;
