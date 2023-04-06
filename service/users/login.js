const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { NotAuthorizideError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");
// const { sendEmail } = require("../../helpers/sendEmail");

const login = async (email, password) => {
  const user = await User.findOne({ email });

  // if (!user.subscribe) {
  //   const subscribeEmail = {
  //     to: email,
  //     subject: "Please choose our subscribe",
  //     html: `<h3>Hey everyone, welcome back to our website. Don't forget to click Subscribe if you want more weekly updates our recipes.</h3>`,
  //   };
  //   await sendEmail(subscribeEmail);
  // }

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
