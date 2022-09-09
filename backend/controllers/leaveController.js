const asyncHandler = require("express-async-handler");
const Leave = require("../models/leaveModel");

// @desc apply for leave
// @rout POST/api/leave/apply
// @access Private
const applyForLeave = asyncHandler(async (req, res) => {
  const { startDate, endDate, leaveType, description } = req.body;

  if (!startDate || !endDate || !leaveType) {
    res.status(400);
    throw new Error("Please fill in required fields");
  }
  try {
    const leave = await Leave.create({
      employee: req.employee.id,
      startDate,
      endDate,
      leaveType,
      description,
    });
    res.status(201).json(leave);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Invalid employee data");
  }
});

// @desc all leave records
// @route GET/api/leave
// @access private
const getLeaveRequests = asyncHandler(async (req, res) => {
  const requests = await Leave.find({}).populate("employee");
  res.status(200).json(requests);
});

// @desc leave record details
// @route GET/api/leaveDetails
// @access private
const getLeaveRequestDetails = asyncHandler(async (req, res) => {
  try {
    const requestDetails = await Leave.findById(req.params.id).populate(
      "employee"
    );
    res.status(200).json(requestDetails);
  } catch (error) {
    res.status(400);
    throw new Error("No leave found with such id");
  }
});

module.exports = { applyForLeave, getLeaveRequests, getLeaveRequestDetails };
