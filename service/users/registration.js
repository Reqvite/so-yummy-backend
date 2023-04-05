const { RegistrationConflictError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");
const gravatar = require("gravatar");
const { uuid } = require("uuidv4");
const { sendEmail } = require("../../helpers/sendEmail");

const registration = async (name, email, password) => {
  const avatarURL = gravatar.url(email);
  const subscribeCode = uuid();

  try {
    const user = new User({
      name,
      email,
      password,
      avatarURL,
      subscribeCode,
      subscribe: true,
    });

    await user.save();

    const subscribeEmail = {
      to: email,
      subject: "Please choose our subscribe",
      html: `<h3>Hey everyone, welcome back to our website. Don't forget to click Subscribe if you want more weekly updates our recipes.</h3>`,
    };

    await sendEmail(subscribeEmail);

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
