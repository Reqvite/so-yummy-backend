const { getUserInformation } = require("../../service/users/getUserInformation");

async function userInformationController(req, res) {
  const { id } = req.params;

  const userInformation = await getUserInformation(id);

  return res.status(200).json(userInformation);
}

module.exports = {
  userInformationController,
};
