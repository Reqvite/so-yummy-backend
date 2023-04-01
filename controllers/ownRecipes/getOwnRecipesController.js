const { getOwnRecipes } = require("../../service/ownRecipes/getOwnRecipes");

const getOwnRecipesController = async (req, res) => {
  const { _id } = req.user;
  const recipes = await getOwnRecipes(_id);
  res.json({ status: "succes", code: 200, recipes });
};

module.exports = {
  getOwnRecipesController,
};
