const { RegistrationConflictError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");
const gravatar = require("gravatar");

const registration = async (name, email, password) => {
  const avatarURL = gravatar.url(email);
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new RegistrationConflictError("User with this email already exists");
  }

  const user = new User({
    name,
    email,
    password,
    avatarURL,
  });

  await user.save();

  return {
    email: user.email,
  };
};

module.exports = {
  registration,
};
