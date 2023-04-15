const { WrongParametersError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");

const deleteFavoriteController = async (req, res) => {
  const user = req.user;
  const { id } = req.params;

  const recipe = await Recipe.findOne({ id });

  if (!recipe) {
    throw new WrongParametersError("Recipe not found");
  }

  const recipeIndex = user.favorites.indexOf(id);
  if (recipeIndex === -1) {
    throw new WrongParametersError("This recipe is not in your favorites");
  }

  user.favorites.splice(recipeIndex, 1);
  recipe.favorites.splice(recipe.favorites.indexOf(user._id), 1);

  await Promise.all([user.save(), recipe.save()]);

  res.status(200).json({ message: "Recipe removed from favorites", id });
};

module.exports = {
  deleteFavoriteController,
};
