const { Ingredient } = require("../../models/ingredientModel");
const { User } = require("../../models/userModel");

const getShoppingList = async (_id) => {
  const { shoppingList } = await User.findById(_id);

  const ingredients = await Ingredient.find({});

  const updatedShoppingList = shoppingList.map((recipe) => {
    const updatedIngredients = recipe.ingredients.map((ingredient) => {
      const ingredientDetails = ingredients.find(({ _id }) =>
        _id.equals(ingredient.id)
      );
      return {
        ...ingredient,
        ttl: ingredientDetails.ttl,
        thb: ingredientDetails.thb,
      };
    });

    return { ...recipe, ingredients: updatedIngredients };
  });

  return updatedShoppingList;
};

module.exports = {
  getShoppingList,
};
