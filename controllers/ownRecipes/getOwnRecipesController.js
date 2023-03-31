const { getOwnRecipes } = require("../../service/ownRecipes/getOwnRecipes");

const getOwnRecipesController = async (req, res) => {
  const { _id } = req.user;
  const contacts = await getOwnRecipes(_id);
  res.json({ status: "succes", code: 200, contacts });
};

module.exports = {
  getOwnRecipesController,
};
