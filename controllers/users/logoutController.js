const { logout } = require("../../service/users");

const logoutController = async (req, res) => {
  await logout(req.user._id);
  res.status(204).json({ status: "No Content", code: 204 });
};

module.exports = {
  logoutController,
};
