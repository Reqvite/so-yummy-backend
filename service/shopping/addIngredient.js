const { WrongParametersError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");
const { User } = require("../../models/userModel");

const addIngredient = async (recipeId, ingredientId, _id) => {
  const recipe = await Recipe.findById(recipeId);

  if (!recipe) {
    throw new WrongParametersError(`Recipe not found`);
  }

  const user = await User.findById(_id);

  if (!user) {
    throw new WrongParametersError(`User not found`);
  }

  const [ingredient] = recipe.ingredients.filter(
    ({ id }) => id.toString() === ingredientId
  );

  if (!ingredient) {
    throw new WrongParametersError(`Ingredient not found`);
  }

  const ingredientAlreadyExists = user.shoppingList.some(
    ({ id }) => id.toString() === ingredient.id.toString()
  );

  if (!ingredientAlreadyExists) {
    user.shoppingList.push({
      id: ingredient.id.toString(),
      measure: ingredient.measure,
    });

    await user.save();
  }

  return user.shoppingList;
};

module.exports = {
  addIngredient,
};
