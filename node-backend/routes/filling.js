const express = require("express");
const router = express.Router();

const {
  getFillings,
  getaSingleFilling,
  deleteFilling,
  updateFilling,
  addfilling
} = require("../controllers/filling");

router
  .route("/")
  .post(addfilling)
  .get(getFillings);
router
  .route("/:id")
  .get(getaSingleFilling)
  .put(updateFilling)
  .delete(deleteFilling);

module.exports = router;
