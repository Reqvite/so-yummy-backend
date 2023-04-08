const { User } = require("../../models/userModel");
const cloudinary = require("cloudinary").v2;

const updateUserController = async (req, res) => {
  const { _id } = req.user;

  const { avatar, name } = req.body;

  if (!avatar) {
    const result = await User.findOneAndUpdate(_id, { name });
    if (!result) {
      throw new Error(404, "Not found!");
    }
  } else {
    const { url } = await cloudinary.uploader.upload(avatar);

    const user = await User.findByIdAndUpdate(
      _id,
      { avatarURL: url, name },
      { new: true }
    ).select("email fullname avatarURL");

    if (!user) {
      throw new Error(404, "Not found");
    }
  }

  const user = await User.findOne(
    { _id },
    { email: 1, name: 1, avatarURL: 1, _id: 0 }
  );

  res.status(200).json({ status: "OK", code: 200, user });
};

module.exports = {
  updateUserController,
};
