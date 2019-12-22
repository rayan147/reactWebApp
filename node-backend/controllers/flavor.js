const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/async");
const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
// Flavor Model
const Flavor = require("../models/Flavor");
// @desc      Get single Flavor
// @route     GET /api/v1/Flavor/:id
// @access    Private/Admin
exports.getaSingleFlavor = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  const singleFlavor = await Flavor.findById(id);
  if (!singleFlavor) {
    return next(
      new ErrorResponse(
        `singleFlavor not found with id of ${req.params.id}`,
        404
      )
    );
  } else
    res.status(200).json({
      success: true,
      data: singleFlavor
    });
});

// @route   GET api/flavors
// @desc    Get All flavors
// @access  Public
exports.getFlavors = asyncHandler(async (req, res, next) => {
  let flavor = await Flavor.find().sort({ date: -1 });

  res.status(200).json({
    success: true,
    count: flavor.length,
    data: flavor
  });
});
// @route   POST
// @desc    Create An flavor
// @access  Private
exports.addflavor = asyncHandler(async (req, res, next) => {
  // Add user to req,body

  let { name } = req.body;
  const newFlavor = await Flavor.create({ name });

  newFlavor.save();
  res.status(201).json({
    success: true,
    data: newFlavor
  });
});

// @desc      Update Flavor
// @route     PUT /api/v1/Flavor/:id
// @access    Private/Admin
exports.updateFlavor = asyncHandler(async (req, res, next) => {
  let id = new objectId(req.params.id);

  let updateFlavor = await Flavor.findById(id);

  if (!updateFlavor) {
    return next(
      new ErrorResponse(
        `updateFlavor not found with id of ${req.params.id}`,
        404
      )
    );
  }
  updatedFlavor = await Flavor.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: updateFlavor
  });
});

// @desc      Delete Flavors
// @route     DELETE /api/v1/users/:id
// @access    Private/Admin
exports.deleteFlavor = asyncHandler(async (req, res, next) => {
  // console.log(req.params);
  // console.log("delete");

  let id = new objectId(req.params.id);
  // let { id } = req.params;
  const deleteFlavor = await Flavor.findById(id);
  await Flavor.findByIdAndDelete(id);
  if (!deleteFlavor) {
    return next(
      new ErrorResponse(`deleteFlavor not found with id of ${id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: {}
  });
});
