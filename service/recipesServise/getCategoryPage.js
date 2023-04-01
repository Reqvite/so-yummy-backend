const { Recipe } = require("../../models/recipesModel");

const getCategoryPage = async (category, skip, limit) => {
  const recipesPages = await Recipe.find({ category }).skip(skip).limit(limit);
  return recipesPages;
};

module.exports = {
  getCategoryPage,
};
