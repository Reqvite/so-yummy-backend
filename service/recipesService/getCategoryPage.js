const { Recipe } = require("../../models/recipesModel");

const getCategoryPage = async (category, skip, limit) => {
  const regex = new RegExp(category, "i");
  const totalCount = await Recipe.countDocuments({ category: regex });
  const recipesPages = await Recipe.find({ category: regex })
    .sort({ popularity: -1 })
    .skip(skip)
    .limit(limit);
  return [recipesPages, totalCount];
};

module.exports = {
  getCategoryPage,
};
