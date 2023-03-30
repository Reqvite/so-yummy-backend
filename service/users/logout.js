const { NotAuthorizideError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");

const logout = async (id) => {
  if (!id) {
    throw new NotAuthorizideError("Not authorized");
  }
  await User.findByIdAndUpdate(id, {
    $set: { token: null },
  });
};

module.exports = {
  logout,
};
