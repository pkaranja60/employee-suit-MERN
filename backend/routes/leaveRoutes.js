const express = require("express");
const router = express.Router();
const {
  applyForLeave,
  getLeaveRequests,
  getLeaveRequestDetails,
  approveLeave,
  rejectLeave,
  filterByStatus,
} = require("../controllers/leaveController");
const { protect, auth } = require("../middleware/authMiddleware");

//Admin
router.get("/fetchRequests", protect, getLeaveRequests);
router.get("/fetchLeaveDetails/:id", protect, getLeaveRequestDetails);
router.put("/fetchLeaveDetails/approve/:id", protect, approveLeave);
router.put("/fetchLeaveDetails/reject/:id", protect, rejectLeave);
router.post("/status/filter", protect, filterByStatus);

//mobile
router.post("/apply", auth, applyForLeave);

module.exports = router;
