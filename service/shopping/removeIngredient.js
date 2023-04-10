const { WrongParametersError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");

const removeIngredient = async (ingredientId, _id, recipeId) => {
  const user = await User.findById(_id);

  if (!user) {
    throw new Error(`Unauthorized`);
  }

  const recipeIndex = user.shoppingList.findIndex(
    (recipe) => recipe.recipeId === recipeId
  );

  if (recipeIndex === -1) {
    throw new WrongParametersError(`Recipe not found in shopping list.`);
  }

  const ingredientIndex = user.shoppingList[recipeIndex].ingredients.findIndex(
    (ingredient) => ingredient.id === ingredientId
  );

  if (ingredientIndex === -1) {
    throw new WrongParametersError(`Ingredient not found in recipe.`);
  }

  user.shoppingList[recipeIndex].ingredients.splice(ingredientIndex, 1);

  if (user.shoppingList[recipeIndex].ingredients.length === 0) {
    user.shoppingList.splice(recipeIndex, 1);
  } else {
    await User.findByIdAndUpdate(
      _id,
      { $set: { shoppingList: user.shoppingList } },
      { new: true }
    );
  }

  await user.save();

  return { ingredientId, recipeId };
};

module.exports = {
  removeIngredient,
};
