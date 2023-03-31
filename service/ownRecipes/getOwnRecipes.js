const { OwnRecipe } = require("../../models/ownRecipeModel");

const getOwnRecipes = async (_id) => {
  const recipes = await OwnRecipe.find({ owner: _id });
  return recipes;
};

module.exports = {
  getOwnRecipes,
};
