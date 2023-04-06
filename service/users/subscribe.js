const { Error } = require("mongoose");
const { sendEmail } = require("../../helpers/sendEmail");
const { User } = require("../../models/userModel");

const subscribe = async (email) => {
  const user = await User.findOne({ email });

  const subscribeEmail = {
    to: email,
    subject: "Please choose our subscribe",
    html: `<h3>Hey everyone, welcome back to our website. Don't forget to click Subscribe if you want more weekly updates our recipes.</h3>`,
  };

  if (!email) {
    throw new Error(400, "Missing required field email");
  }

  if (!user) {
    throw new Error(401, "Email not found");
  }
  await User.findByIdAndUpdate(user._id, {
    subscribe: true,
  });
  if (user.subscribe) {
    throw new Error(401, "User was already subscribed!");
  }
  console.log(user.subscribe);
  await sendEmail(subscribeEmail);
};

module.exports = { subscribe };
