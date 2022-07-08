const express = require("express");
const router = express.Router();
const {
  registerEmployee,
  loginEmployee,
  getEmployees,
  getProfile,
} = require("../controllers/employeeController");
const { auth, protect } = require("../middleware/authMiddleware");

router.post("/", registerEmployee);
router.post("/login", loginEmployee);
router.get("/employees", getEmployees);
router.get("/profile", auth, getProfile);

module.exports = router;
