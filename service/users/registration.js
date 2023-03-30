const { RegistrationConflictError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");

const registration = async (name, email, password) => {
  try {
    const user = new User({
      name,
      email,
      password,
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
