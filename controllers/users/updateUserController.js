const path = require("path");

const Jimp = require("jimp");

const fs = require("fs/promises");

const { User } = require("../../models/userModel");

const updateUserController = async (req, res) => {
  const { _id } = req.user;

  const { path: tmpUpload, originalname } = req.file;

  const filename = `${_id}_${originalname}`;

  const avatarsDir = path.join(__dirname, "../../public/avatars", filename);

  const file = await Jimp.read(tmpUpload);

  await file.resize(250, 250).writeAsync(avatarsDir);

  fs.unlink(tmpUpload);

  const result = await User.findOneAndUpdate({ _id }, req.body, {
    new: true,
  });
  if (!result) {
    throw new Error(404, "Not found!");
  }

  const user = await User.findByIdAndUpdate(
    _id,
    { avatarURL: avatarsDir },
    { new: true }
  );

  if (!user) {
    throw new Error(404, "Not found");
  }

  res.json({
    avatarURL: user.avatarURL,
    result,
  });
};

module.exports = {
  updateUserController,
};
