const { registration } = require("./registration");
const { login } = require("./login");
const { logout } = require("./logout");
const { currentUser } = require("./currentUser");
const { getUserInformation } = require("./userInformation");
const { subscribe } = require("./subscribe");

module.exports = {
  registration,
  login,
  logout,
  currentUser,
  getUserInformation,
  subscribe,
};
