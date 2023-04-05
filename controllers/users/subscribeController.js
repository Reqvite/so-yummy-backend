const { subscribe } = require("../../service/users/subscribe");

const subscribeController = async (req, res) => {
  const { email } = req.body;

  const user = await subscribe(email);

  res.status(201).json({ status: "Sended", code: 201, user });
};

module.exports = { subscribeController };
