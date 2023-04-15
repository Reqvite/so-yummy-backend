const { Recipe } = require("../../models/recipesModel");

const getOwnRecipes = async (limit, startIndex, _id) => {
  const count = await Recipe.countDocuments({ owner: _id });
  const recipes = await Recipe.find({ owner: _id })
    .skip(startIndex)
    .limit(limit);

  return { recipes, count };
};

module.exports = {
  getOwnRecipes,
};
