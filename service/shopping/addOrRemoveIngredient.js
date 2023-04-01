const { WrongParametersError } = require("../../helpers/errors");
const { Ingredient } = require("../../models/ingredientModel");
const { User } = require("../../models/userModel");

const addOrRemoveIngredient = async (id, _id) => {
  const ingredient = await Ingredient.findById(id);

  if (!ingredient) {
    throw new WrongParametersError(`Ingredient not found`);
  }

  const user = await User.findById(_id);

  if (!user) {
    throw new WrongParametersError(`User not found`);
  }

  const isProductAlreadyAdded = user.shoppingList.includes(id);

  if (isProductAlreadyAdded) {
    user.shoppingList.pull(id);

    await user.save();

    return user.shoppingList;
  }

  user.shoppingList.push(id);

  await user.save();

  return user.shoppingList;
};

module.exports = {
  addOrRemoveIngredient,
};
