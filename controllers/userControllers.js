const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const asyncHandler = require("express-async-handler");

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("Invalid User Data!");
  }
});

// @desc    Get all Activated Users
// @route   GET /api/users/active
// @access  Public
const activatedUser = asyncHandler(async (req, res) => {
  const users = await User.findAll({ isActivated: true });
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).json({ message: "No users found" });
  }
});

module.exports = { registerUser, activatedUser };
