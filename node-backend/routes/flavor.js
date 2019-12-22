const express = require("express");
const router = express.Router();

const {
  getFlavors,
  getaSingleFlavor,
  deleteFlavor,
  updateFlavor,
  addflavor
} = require("../controllers/flavor");

router
  .route("/")
  .post(addflavor)
  .get(getFlavors);
router
  .route("/:id")
  .get(getaSingleFlavor)
  .put(updateFlavor)
  .delete(deleteFlavor);

module.exports = router;
