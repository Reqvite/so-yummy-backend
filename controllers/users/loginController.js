const { login } = require("../../service/users/login");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const { token, user } = await login(email, password);
  res.json({ status: "OK", code: 200, token, user });
};

module.exports = {
  loginController,
};
