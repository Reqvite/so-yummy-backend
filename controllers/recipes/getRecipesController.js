const { Recipe } = require("../../models/recipesModel");

const getRecipesController = async (req, res) => {
  const result = await Recipe.find({}, "-createdAt -updatedAt");
  res.json(sortRecipes(result));
};

const sortRecipes = (arr) => {
  let list = { Breakfast: [], Miscellaneous: [], Chicken: [], Dessert: [] };
  arr.forEach((item) => {
    if (list[item.category] && list[item.category].length < 4) {
      list[item.category].push(item);
    }
  });
  return list;
};

module.exports = {
  getRecipesController,
};
