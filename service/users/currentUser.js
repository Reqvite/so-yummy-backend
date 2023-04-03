const { NotAuthorizideError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");

const currentUser = async (token) => {
  if (!token) {
    throw new NotAuthorizideError("Not authorized");
  }
  return await User.findOne(
    { token },
    { email: 1, name: 1, avatarURL: 1, _id: 0 }
  );
};

module.exports = {
  currentUser,
};
