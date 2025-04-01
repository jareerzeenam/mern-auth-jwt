import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc   Auth user/set token
// @route  POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  // const { username, password } = req.body;

  // console.log('Username:', username, 'Password:', password);

  res
    .status(200)
    .json({ message: 'User authenticated successfully' });
  //   const { username, password } = req.body;
  //   if (username && password) {
  //     res
  //       .status(200)
  //       .json({ message: 'User authenticated successfully' });
  //   } else {
  //     res.status(400).json({ message: 'Invalid credentials' });
  //   }
});

// @desc   Register a new user
// @route  POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  console.log(`Registering user...`);

  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    // Generate a token and set it in the cookie
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc   Logout user and clear cookie
// @route  POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Logout User',
  });
});

// @desc   Get user profile
// @route  GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Get User Profile',
  });
});

// @desc   Update user profile
// @route  PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Update User Profile',
  });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
