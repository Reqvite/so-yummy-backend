const { WrongParametersError } = require("../../helpers/errors");
const { OwnRecipe } = require("../../models/ownRecipeModel");

const removeOwnRecipe = async (recipeId, _id) => {
  const recipe = await OwnRecipe.findById(recipeId);

  if (!recipe) {
    throw new WrongParametersError(`Not found`);
  }

  if (recipe.owner.toString() !== _id.toString()) {
    throw new Error(`Unauthorized`);
  }

  await recipe.remove();
};

module.exports = {
  removeOwnRecipe,
};
