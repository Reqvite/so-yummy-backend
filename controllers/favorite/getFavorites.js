const { NotAuthorizideError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");

const getFavoritesController = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findOne({ _id });

  if (!user) {
    throw new NotAuthorizideError("Email or password is wrong");
  }

  res.status(200).json(user.favorites);
};

module.exports = {
  getFavoritesController,
};
