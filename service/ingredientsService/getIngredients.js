const { Ingredient } = require("../../models/ingredientModel");

const getIngredients = async () => {
  const ingredient = await Ingredient.find({});
  return ingredient;
};

module.exports = {
  getIngredients,
};
