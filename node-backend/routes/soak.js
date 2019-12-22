const express = require("express");
const router = express.Router();

const {
  getSoaks,
  addSoak,
  updateSoak,
  getaSingleSoak,
  deleteSoak
} = require("../controllers/soak");

router
  .route("/")
  .post(addSoak)
  .get(getSoaks);
router
  .route("/:id")
  .get(getaSingleSoak)
  .put(updateSoak)
  .delete(deleteSoak);

module.exports = router;
