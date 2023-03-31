const { User } = require("../../models/userModel");

const updateUserController = async (req, res) => {
  const { _id } = req.user;

  const { path } = req.file;

  const user = await User.findByIdAndUpdate(
    _id,
    { avatarURL: path },
    { new: true }
  );

  if (!user) {
    throw new Error(404, "Not found");
  }

  res.status(200).json({ status: "OK", code: 200, user });
};

module.exports = {
  updateUserController,
};
