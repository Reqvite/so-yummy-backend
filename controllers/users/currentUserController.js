const { currentUser } = require("../../service/users");

const currentUserController = async (req, res) => {
  const user = await currentUser(req.user.token);
  res.status(200).json({ status: "OK", code: 200, user });
};

module.exports = {
  currentUserController,
};
