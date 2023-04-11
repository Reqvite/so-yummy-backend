const { registrationController } = require("../users/registrationController");
const { loginController } = require("../users/loginController");
const { currentUserController } = require("../users/currentUserController");
const { logoutController } = require("../users/logoutController");
const { updateUserController } = require("./updateUserController");
const { subscribeController } = require("./subscribeController");
const { userInformationController } = require("./userInformationController");
const {
  googleAuthRedirectController,
} = require("./googleAuthRedirectController");
const { loginGoogleAuthController } = require("./loginGoogleAuthController");
const {
  googleAuthCallbackController,
} = require("./googleAuthCallbackController");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  updateUserController,
  subscribeController,
  userInformationController,
  googleAuthRedirectController,
  loginGoogleAuthController,
  googleAuthCallbackController,
};
