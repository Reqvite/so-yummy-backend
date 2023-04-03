const { WrongParametersError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");

const getFavoritesController = async (req, res) => {
  const { _id } = req.user;
  const data = await Recipe.find({ favorites: _id });
  if (!data) {
    throw WrongParametersError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = {
  getFavoritesController
};