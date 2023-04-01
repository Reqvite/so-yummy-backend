const { Recipe } = require("../../models/recipesModel");

const getRecipeById = async (id) => {
  const recipe = await Recipe.findById(id);

  return recipe;
};

module.exports = {
  getRecipeById,
};
