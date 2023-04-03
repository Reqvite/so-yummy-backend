const { RegistrationConflictError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");

const addFavoriteController = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  const isFavorite = await Recipe.findOne({ _id, id });
  if (isFavorite) {
    throw RegistrationConflictError(409, "This recipe has already added to favorite");
  }
  await Recipe.findOneAndUpdate(id, { $addToSet: { favorites: _id } });
  res.status(201).json({ message: "Added to favorite" });
};

module.exports = {
  addFavoriteController
};