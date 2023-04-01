const { WrongParametersError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");

const removeIngredient = async (ingredientId, _id) => {
  const user = await User.findById(_id);

  if (!user) {
    throw new Error(`Unauthorized`);
  }

  const ingredientIndex = user.shoppingList.findIndex(
    (ingredient) => ingredient.id === ingredientId
  );

  if (ingredientIndex === -1) {
    throw new WrongParametersError(`Not found`);
  }

  await User.findByIdAndUpdate(
    _id,
    { $pull: { shoppingList: { id: ingredientId } } },
    { new: true }
  );
};

module.exports = {
  removeIngredient,
};
