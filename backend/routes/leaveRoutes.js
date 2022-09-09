const express = require("express");
const router = express.Router();
const {
  applyForLeave,
  getLeaveRequests,
  getLeaveRequestDetails,
} = require("../controllers/leaveController");
const { protect, auth } = require("../middleware/authMiddleware");

//Admin
router.get("/fetchRequests", protect, getLeaveRequests);
router.get("/fetchLeaveDetails/:id", getLeaveRequestDetails);

//mobile
router.post("/apply", auth, applyForLeave);

module.exports = router;
