const { ctrlWrapper } = require("../../helpers/apiHelpers");
const { Recipe } = require("../../models/recipesModel");

const listRecipes = async (req, res) => {
  const result = await Recipe.find();
  res.json(result);
};

module.exports = {
  listRecipes: ctrlWrapper(listRecipes),
};
