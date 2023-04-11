const { NotAuthorizideError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");
const loginGoogleAuthController = async (req, res) => {
  const { token } = req.params;

  if (!token) {
    throw new NotAuthorizideError("Not Authorizide");
  }

  const user = await User.findOne(
    { token },
    { email: 1, name: 1, avatarURL: 1, _id: 0 }
  );

  res.status(200).json({ status: "OK", code: 200, token, user });
};

module.exports = {
  loginGoogleAuthController,
};
