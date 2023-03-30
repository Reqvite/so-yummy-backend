const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { NotAuthorizideError } = require("../helpers/errors");

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");

    if (!token) {
      next(new NotAuthorizideError("Not authorized"));
    }

    const decodedUser = jwt.decode(token, process.env.JWT_SECRET);

    if (!decodedUser._id) {
      next(new NotAuthorizideError("Not authorized"));
    }
    const user = await User.findOne({ _id: decodedUser._id });

    if (user.token !== token) {
      next(new NotAuthorizideError("Not authorized"));
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authMiddleware,
};
