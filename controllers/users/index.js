const { registrationController } = require("../users/registrationController");
const { loginController } = require("../users/loginController");
const { currentUserController } = require("../users/currentUserController");
const { logoutController } = require("../users/logoutController");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
};
