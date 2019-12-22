const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/async");
const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
// Soak Model
const Soak = require("../models/Soak");
// @desc      Get single soak
// @route     GET /api/v1/soak/:id
// @access    Private/Admin
exports.getaSingleSoak = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  const singleSoak = await Soak.findById(id);
  if (!singleSoak) {
    return next(
      new ErrorResponse(`singleSoak not found with id of ${req.params.id}`, 404)
    );
  } else
    res.status(200).json({
      success: true,
      data: singleSoak
    });
});

// @route   GET api/soaks
// @desc    Get All soaks
// @access  Public
exports.getSoaks = asyncHandler(async (req, res, next) => {
  let soak = await Soak.find().sort({ date: -1 });

  res.status(200).json({
    success: true,
    count: soak.length,
    data: soak
  });
});
// @route   POST
// @desc    Create An soak
// @access  Private
exports.addSoak = asyncHandler(async (req, res, next) => {
  // Add user to req,body

  let { name } = req.body;
  const newSoak = await Soak.create({ name });

  newSoak.save();
  res.status(201).json({
    success: true,
    data: newSoak
  });
});

// @desc      Update soak
// @route     PUT /api/v1/soak/:id
// @access    Private/Admin
exports.updateSoak = asyncHandler(async (req, res, next) => {
  let id = new objectId(req.params.id);

  let updateSoak = await Soak.findById(id);

  if (!updateSoak) {
    return next(
      new ErrorResponse(`updateSoak not found with id of ${req.params.id}`, 404)
    );
  }
  updatedSoak = await Soak.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: updatedSoak
  });
});

// @desc      Delete soaks
// @route     DELETE /api/v1/users/:id
// @access    Private/Admin
exports.deleteSoak = asyncHandler(async (req, res, next) => {
  let id = new objectId(req.params.id);

  const deleteSoak = await Soak.findById(id);
  await Soak.findByIdAndDelete(id);
  if (!deleteSoak) {
    return next(
      new ErrorResponse(`deleteSoak not found with id of ${id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: {}
  });
});
