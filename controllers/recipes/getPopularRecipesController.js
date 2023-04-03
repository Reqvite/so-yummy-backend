const { Recipe } = require("../../models/recipesModel");
const { WrongParametersError } = require("../../helpers/errors");

const getPopularRecipesController = async (req, res) => {
  const result = await Recipe.aggregate([
    {
      $project: {
        favorites: 1,
        title: 1,
        thumb: 1,
        description: 1,
        count: { $size: "$favorites" },
      },
    },
    { $sort: { count: -1 } },
    { $skip: 0 },
    { $limit: 4 },
  ]);
  if (!result) {
    throw WrongParametersError("Not found");
  }
  res.json(result);
};

module.exports = { getPopularRecipesController };
