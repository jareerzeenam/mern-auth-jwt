import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.userId).select(
        '-password'
      ); // Exclude password from the user object

      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, invalid token');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { protect };

// Middleware to check if the user is an admin
// const admin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(401);
//     throw new Error('Not authorized as an admin');
//   }
// };
// export { protect, admin };
