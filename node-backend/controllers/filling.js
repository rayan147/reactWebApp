const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/async");
const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
// Filling Model
const Filling = require("../models/Filling");
// @desc      Get single Filling
// @route     GET /api/v1/Filling/:id
// @access    Private/Admin
exports.getaSingleFilling = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  const singleFilling = await Filling.findById(id);
  if (!singleFilling) {
    return next(
      new ErrorResponse(
        `singleFilling not found with id of ${req.params.id}`,
        404
      )
    );
  } else
    res.status(200).json({
      success: true,
      data: singleFilling
    });
});

// @route   GET api/Fillings
// @desc    Get All Fillings
// @access  Public
exports.getFillings = asyncHandler(async (req, res, next) => {
  let filling = await Filling.find().sort({ date: -1 });

  res.status(200).json({
    success: true,
    count: filling.length,
    data: filling
  });
});
// @route   POST
// @desc    Create An filling
// @access  Private
exports.addfilling = asyncHandler(async (req, res, next) => {
  // Add user to req,body

  let { name } = req.body;
  const newFilling = await Filling.create({ name });

  newFilling.save();
  res.status(201).json({
    success: true,
    data: newFilling
  });
});

// @desc      Update Filling
// @route     PUT /api/v1/Filling/:id
// @access    Private/Admin
exports.updateFilling = asyncHandler(async (req, res, next) => {
  let id = new objectId(req.params.id);

  let updateFilling = await Filling.findById(id);

  if (!updateFilling) {
    return next(
      new ErrorResponse(
        `updateFilling not found with id of ${req.params.id}`,
        404
      )
    );
  }
  updatedFilling = await Filling.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: updateFilling
  });
});

// @desc      Delete Fillings
// @route     DELETE /api/v1/users/:id
// @access    Private/Admin
exports.deleteFilling = asyncHandler(async (req, res, next) => {
  // console.log(req.params);
  // console.log("delete");

  let id = new objectId(req.params.id);
  // let { id } = req.params;
  const deleteFilling = await Filling.findById(id);
  await Filling.findByIdAndDelete(id);
  if (!deleteFilling) {
    return next(
      new ErrorResponse(`deleteFilling not found with id of ${id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: {}
  });
});
