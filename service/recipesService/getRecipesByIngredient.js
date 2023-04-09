const { Recipe } = require("../../models/recipesModel");
const { Ingredient } = require("../../models/ingredientModel");

const findRecipesByIngredients = async (ingredientIds, limit, skip) => {
  const count = await Recipe.countDocuments({
    ingredients: {
      $elemMatch: { id: { $in: ingredientIds } },
    },
  });

  const recipes = await Recipe.find({
    ingredients: {
      $elemMatch: { id: { $in: ingredientIds } },
    },
  })
    .sort({ popularity: -1 })
    .limit(limit)
    .skip(skip)
    .exec();

  return { count, recipes };
};

const getRecipesByIngredient = async (titlePart, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const ingredients = await Ingredient.find({
    ttl: { $regex: titlePart, $options: "i" },
  }).exec();

  const ingredientIds = ingredients.map((ingredient) => ingredient._id);

  const { count, recipes } = await findRecipesByIngredients(
    ingredientIds,
    limit,
    skip
  );

  return { count, recipes, page };
};

module.exports = {
  getRecipesByIngredient,
};
