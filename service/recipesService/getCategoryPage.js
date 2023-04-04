const { Recipe } = require("../../models/recipesModel");

const getCategoryPage = async (category, skip, limit) => {
  const regex = new RegExp(category, "i");
  const recipesPages = await Recipe.find({ category: regex })
    .skip(skip)
    .limit(limit);
  return recipesPages;
};

module.exports = {
  getCategoryPage,
};
