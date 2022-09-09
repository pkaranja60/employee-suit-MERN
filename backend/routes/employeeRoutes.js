const express = require("express");
const router = express.Router();
const {
  registerEmployee,
  loginEmployee,
  getEmployees,
  getProfile,
} = require("../controllers/employeeController");
const { auth, protect } = require("../middleware/authMiddleware");

//Admin
router.post("/create", protect, registerEmployee);
router.get("/employees", protect, getEmployees);

//mobile
router.post("/login", loginEmployee);
router.get("/profile", auth, getProfile);

module.exports = router;
