const { Ingredient } = require("../../models/ingredientModel");

async function getIngredients() {
  const ingredient = await Ingredient.find({});
  return ingredient;
}

module.exports = {
  getIngredients,
};
