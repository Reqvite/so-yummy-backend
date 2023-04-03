const { RegistrationConflictError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");

const deleteFavoriteController = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  const isFavorite = await Recipe.findOne({ _id, id });
  if (!isFavorite) {
    throw RegistrationConflictError(409, "This recipe is not in favorites");
  }
  await Recipe.findOneAndUpdate(id, { $unset: { favorites: _id } });
  res.status(201).json({ message: "Deleted from favorite" });
};

module.exports = {
  deleteFavoriteController
};