const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { NotAuthorizideError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new NotAuthorizideError("Email or password is wrong");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizideError("Email or password is wrong");
  }

  const id = user._id;
  const token = jwt.sign(
    {
      _id: id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  await User.findByIdAndUpdate(id, {
    $set: { token },
  });
  return {
    token,
    user: {
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
    },
  };
};

module.exports = {
  login,
};
