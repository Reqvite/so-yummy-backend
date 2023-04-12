const { NotAuthorizideError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");
const { User } = require("../../models/userModel");

const getOwnRecipes = async (limit, startIndex, _id) => {
  const user = await User.findOne({ _id });

  if (!user) {
    throw new NotAuthorizideError("Not authorizide");
  }

  const count = await Recipe.countDocuments({ owner: _id });
  const recipes = await Recipe.find({ owner: _id })
    .skip(startIndex)
    .limit(limit);

  return { recipes, count };
};

module.exports = {
  getOwnRecipes,
};
