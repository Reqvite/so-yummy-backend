const { RegistrationConflictError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");
const gravatar = require("gravatar");

const registration = async (name, email, password) => {
  const avatarURL = gravatar.url(email);
  try {
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
  } catch (err) {
    throw new RegistrationConflictError("Email in use");
  }
};

module.exports = {
  registration,
};
