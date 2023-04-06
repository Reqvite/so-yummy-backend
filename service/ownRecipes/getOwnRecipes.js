const { Recipe } = require("../../models/recipesModel");

const getOwnRecipes = async (_id) => {
  const recipes = await Recipe.find({ owner: _id });
  return recipes;
};

module.exports = {
  getOwnRecipes,
};
