const { NotAuthorizideError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");
const { User } = require("../../models/userModel");

const getFavoritesController = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findOne({ _id });

  if (!user) {
    throw new NotAuthorizideError("Email or password is wrong");
  }

  const favoriteRecipes = await Recipe.find({
    _id: { $in: user.favorites },
  });

  res.status(200).json({
    favorites: favoriteRecipes,
  });
};

module.exports = {
  getFavoritesController,
};
