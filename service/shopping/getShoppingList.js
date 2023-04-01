const { Ingredient } = require("../../models/ingredientModel");
const { User } = require("../../models/userModel");

const getShoppingList = async (_id) => {
  const { shoppingList } = await User.findById(_id);
  const ingredients = await Ingredient.find({ _id: { $in: shoppingList } });

  return ingredients;
};

module.exports = {
  getShoppingList,
};
