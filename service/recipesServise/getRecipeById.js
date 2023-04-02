const { default: mongoose } = require("mongoose");
const { WrongParametersError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");

const getRecipeById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new WrongParametersError(`Invalid recipe id=${id}`);
  }

  const recipe = await Recipe.findById(id);

  if (!recipe) {
    throw new WrongParametersError(`Recipe with id=${id} is not found!`);
  }

  return recipe;
};

module.exports = {
  getRecipeById,
};
