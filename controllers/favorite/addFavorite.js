const { WrongParametersError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");

const addFavoriteController = async (req, res) => {
  const user = req.user;
  const { id } = req.params;

  const recipe = await Recipe.findOne({ id });

  if (!recipe) {
    throw new WrongParametersError("Recipe not found");
  }

  if (user.favorites.includes(id)) {
    throw new WrongParametersError(
      "This recipe has already been added to favorites"
    );
  }

  user.favorites.push(id);
  recipe.favorites.push(user._id);

  await Promise.all([user.save(), recipe.save()]);

  res.status(200).json({ message: "Recipe added to favorites", recipe });
};

module.exports = {
  addFavoriteController,
};
