const { WrongParametersError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");

const addIngredient = async (recipeId, ingredientId, user) => {
  const recipe = await Recipe.findById(recipeId);

  if (!recipe) {
    throw new WrongParametersError(`Recipe not found`);
  }

  const [ingredient] = recipe.ingredients.filter(
    ({ id }) => id.toString() === ingredientId
  );

  if (!ingredient) {
    throw new WrongParametersError(`Ingredient not found`);
  }

  const newRecipeId = recipeId;
  const recipeAlreadyExists = user.shoppingList.find(
    ({ recipeId }) => recipeId === newRecipeId
  );

  if (recipeAlreadyExists) {
    const ingredientAlreadyExists = recipeAlreadyExists.ingredients.some(
      ({ id }) => id.toString() === ingredient.id.toString()
    );
    if (!ingredientAlreadyExists) {
      recipeAlreadyExists.ingredients.push({
        id: ingredient.id.toString(),
        measure: ingredient.measure,
      });

      const idx = user.shoppingList.findIndex(
        ({ recipeId }) => recipeId === newRecipeId
      );
      user.shoppingList.splice(idx, 1);
      user.shoppingList.push(recipeAlreadyExists);
    } else {
      throw new WrongParametersError(`Ingredient already added`);
    }
  } else {
    user.shoppingList.push({
      recipeId,
      recipeTitle: recipe.title,
      ingredients: [
        { id: ingredient.id.toString(), measure: ingredient.measure },
      ],
    });
  }

  await user.save();

  return user.shoppingList;
};

module.exports = {
  addIngredient,
};
