const express = require("express");
const router = express.Router();
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
// Soak Model
const Message = require("../models/Message");
// @desc      Get single Message
// @route     GET /api/v1/Message/:id
// @access    Private/Admin
exports.getaSingleMessage = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  const singleMessage = await Message.findById(id);
  if (!singleMessage) {
    return next(
      new ErrorResponse(`Message not found with id of ${req.params.id}`, 404)
    );
  } else
    res.status(200).json({
      success: true,
      data: singleMessage
    });
});

// @route   GET api/Message
// @desc    Get All Messages
// @access  Public
exports.getMessages = asyncHandler(async (req, res, next) => {
  let message = await Message.find().sort({ date: -1 });

  res.status(200).json({
    success: true,
    count: message.length,
    data: message
  });
});
// @route   POST
// @desc    Create A Message
// @access  Private
exports.addMessage = asyncHandler(async (req, res, next) => {
  let { name } = req.body;
  const newMessage = await Message.create({ name });

  newMessage.save();
  res.status(201).json({
    success: true,
    data: newMessage
  });
});

// @desc      Update Message
// @route     PUT /api/v1/Message/:id
// @access    Private/Admin
exports.updateMessage = asyncHandler(async (req, res, next) => {
  let { id } = req.params;

  let updateMessage = await Message.findById(id);
  console.log(updateMessage.id);

  if (!updateMessage) {
    return next(
      new ErrorResponse(`Message not found with id of ${req.params.id}`, 404)
    );
  }
  updatedMessage = await Message.findByIdAndUpdate(updateMessage.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: updatedMessage
  });
});

// @desc      Delete Message
// @route     DELETE /api/v1/Message/:id
// @access    Private/Admin
exports.deleteMessage = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  const deleteMessage = await Message.findById(req.params.id);
  await Message.findByIdAndDelete(id);
  if (!deleteMessage) {
    return next(
      new ErrorResponse(`Message not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: {}
  });
});
