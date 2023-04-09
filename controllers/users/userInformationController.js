const { getUserInformation } = require("../../service/users");

async function userInformationController(req, res) {
  const { id } = req.user;

  const userInformation = await getUserInformation(id);

  return res.status(200).json(userInformation);
}

module.exports = {
  userInformationController,
};
