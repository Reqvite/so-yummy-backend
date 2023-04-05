const { registrationController } = require("../users/registrationController");
const { loginController } = require("../users/loginController");
const { currentUserController } = require("../users/currentUserController");
const { logoutController } = require("../users/logoutController");
const { updateUserController } = require("./updateUserController");
const { subscribeController } = require("./subscribeController");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  updateUserController,
  subscribeController,
};
