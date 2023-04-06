const { Recipe } = require("../../models/recipesModel");
const { WrongParametersError } = require("../../helpers/errors");

const getRecipesByKeyword = async (query, page, limit) => {
  const recipes = await Recipe.find(
    { title: { $regex: query, $options: "i" } },
    null,
    {
      sort: { popularity: -1 },
      skip: (page - 1) * limit,
      limit: limit,
    }
  );

  const count = await Recipe.countDocuments({
    title: { $regex: query, $options: "i" },
  });

  if (count === 0) {
    throw new WrongParametersError("No recipes found for the given keyword");
  }

  return { results: recipes, count };
};

module.exports = {
  getRecipesByKeyword,
};
