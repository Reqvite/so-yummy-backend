const { Ingredient } = require("../../models/ingredientModel");
const { User } = require("../../models/userModel");

const getShoppingList = async (_id) => {
  const { shoppingList } = await User.findById(_id);

  const ingredientIds = shoppingList.map(({ id }) => id);

  const ingredients = await Ingredient.find({ _id: { $in: ingredientIds } });

  const shoppingListWithMeasures = ingredients.map((ingredient) => {
    const { id } = ingredient;
    const { measure } = shoppingList.find((item) => item.id === id);
    return { ...ingredient.toObject(), measure };
  });

  return shoppingListWithMeasures;
};

module.exports = {
  getShoppingList,
};
