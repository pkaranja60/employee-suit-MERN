const generateToken = require("../config/token");
const asyncHandler = require("express-async-handler");
const Employee = require("../models/employeeModel");

// @desc all Employee records
// @route GET/api/goals
// @access private
const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.status(200).json(employees);
});

// @desc Register new Employee
// @rout POST/api/employees
// @access Public
const registerEmployee = asyncHandler(async (req, res, next) => {
  const {
    fullName,
    gender,
    workId,
    department,
    email,
    phone,
    address,
    zipCode,
    county,
  } = req.body;

  if (
    !fullName ||
    !gender ||
    !workId ||
    !department ||
    !email ||
    !phone ||
    !address ||
    !zipCode ||
    !county
  ) {
    res.status(400);
    throw new Error("Please fill in the required fields");
  }

  // Check is user already exists
  const employeeExists = await Employee.findOne({ workId });

  if (employeeExists) {
    res.status(400);
    throw new Error("Employee already exists");
  }

  // Create new employee
  const employee = await Employee.create({
    fullName,
    gender,
    workId,
    department,
    email,
    phone,
    address,
    zipCode,
    county,
  });

  if (employee) {
    res.status(201).json({
      _id: employee.id,
      fullName: employee.fullName,
      gender: employee.gender,
      workId: employee.workId,
      department: employee.department,
      email: employee.email,
      phone: employee.phone,
      address: employee.address,
      zipCode: employee.zipCode,
      county: employee.county,
      token: generateToken(employee._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid employee data");
  }
});

// @desc Authenticate employee
// @rout POST/api/users/login
// @access Public
const loginEmployee = asyncHandler(async (req, res) => {
  const { workId } = req.body;

  console.log("hit endpoint");
  // Check if user workId exists
  const employee = await Employee.findOne({ workId });

  if (employee) {
    res.json({
      _id: employee.id,
      name: employee.fullName,
      //   workId: employee.workId,
      token: generateToken(employee._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user credentials");
  }
});

// @desc Get employee Data
// @rout GET/api/users/me
// @access Private
const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json(req.employee);
});

module.exports = { registerEmployee, getEmployees, loginEmployee, getProfile };
