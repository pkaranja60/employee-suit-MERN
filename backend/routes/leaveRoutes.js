const express = require("express");
const router = express.Router();
const {
  applyForLeave,
  getLeaveRequests,
} = require("../controllers/leaveController");
const { protect, auth } = require("../middleware/authMiddleware");

//Admin
router.get("/fetchRequests", getLeaveRequests);

//mobile
router.post("/apply", auth, applyForLeave);

module.exports = router;
