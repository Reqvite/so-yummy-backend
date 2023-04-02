const { PopularRecipes } = require('../../models/popularRecipeModel');
const { User } = require('../../models/userModel');
const { WrongParametersError } = require('../../helpers/errors');

const deleteFavoriteController = async (req, res) => {
  const { idFood } = req.params;
  const userId = req.user._id;

  const popularRecipe = await PopularRecipes.findOne({
    idFood,
    users: userId,
  });

  if (!popularRecipe) {
    throw WrongParametersError(`The food with ${idFood} was not found in favorites`);
  }
  await User.updateOne(
    { _id: userId },
    { $pull: { favoriteRecipes: { foodId: popularRecipe._id } } }
  );

  if (popularRecipe.users.length === 1) {
    await PopularRecipes.deleteOne({
      idFood,
      users: userId,
    });
  } else {
    await PopularRecipes.findOneAndUpdate(
      { idFood, users: userId },
      { $pull: { users: userId } }
    );
  }
  res.json({
    id: idFood,
  });
};

module.exports = {
  deleteFavoriteController,
};