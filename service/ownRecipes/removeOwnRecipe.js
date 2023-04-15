const { WrongParametersError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");

const removeOwnRecipe = async (recipeId, _id) => {
  const recipe = await Recipe.findById(recipeId);

  if (!recipe) {
    throw new WrongParametersError(`Not found`);
  }

  if (recipe.owner.toString() !== _id.toString()) {
    throw new Error(`Recipe not found`);
  }

  await recipe.remove();
};

module.exports = {
  removeOwnRecipe,
};
