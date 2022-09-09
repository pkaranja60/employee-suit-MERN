const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Employee = require("../models/employeeModel");

// const protect = asyncHandler(async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(" ")[1];

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Get user from the token
//       req.user = await User.findById(decoded.id).select("-password");

//       next();
//     } catch (error) {
//       console.log(error);
//       res.status(401);
//       throw new Error("Not authorized, Invalid token passed");
//     }
//   }

//   if (!token) {
//     res.status(401);
//     throw new Error("Not authorized, No token found");
//   }
// });

const protect = asyncHandler(async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401);
    throw new Error("Not authorized, No authorization found");
  }
  // Get token from header
  const token = authorization.split(" ")[1];
  try {
    // Verify token
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);

    //Get user from token
    req.user = await User.findOne({ _id }).select("_id");

    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Not authorized, invalid token passed");
  }
});

// mobile
const auth = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.employee = await Employee.findById(decoded.id).select("-workId");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect, auth };
