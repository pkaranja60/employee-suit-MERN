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

// @desc approve leave application
// @route PUT/api/leaveDetails
// @access private
const approveLeave = asyncHandler(async (req, res) => {
  try {
    const approve = await Leave.findByIdAndUpdate(
      req.params.id,
      {
        status: "approved",
        isApproved: true,
        isRejected: false,
      },
      { new: true }
    );
    res.status(200).json(approve);
  } catch (error) {
    res.status(400).json(error);
  }
});

// @desc reject leave application
// @route PUT/api/leaveDetails
// @access private
const rejectLeave = asyncHandler(async (req, res) => {
  try {
    const reject = await Leave.findByIdAndUpdate(
      req.params.id,
      {
        status: "rejected",
        isApproved: false,
        isRejected: true,
      },
      { new: true }
    );
    res.status(200).json(reject);
  } catch (error) {
    res.status(400).json(error);
  }
});

// @desc filter leave by status
// @route PUT/api/leaveDetails
// @access private
const filterByStatus = asyncHandler(async (req, res) => {
  const { type, query } = req.body;
  try {
    let status;

    switch (type) {
      case "text":
        status = await Leave.find({ $text: { $search: query } });
        break;
    }

    if (!status.length > 0) {
      status = await Leave.find({});
    }

    res.status(200).json({ status });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = {
  applyForLeave,
  getLeaveRequests,
  getLeaveRequestDetails,
  approveLeave,
  rejectLeave,
  filterByStatus,
};
