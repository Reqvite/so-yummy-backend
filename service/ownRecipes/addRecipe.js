const { Recipe } = require("../../models/recipesModel");

const addRecipe = async (
  title,
  description,
  category,
  time,
  ingredients,
  preview,
  instructions,
  _id
) => {
  const ownRecipe = new Recipe({
    title,
    description,
    category,
    time,
    ingredients,
    preview,
    instructions,
    owner: _id,
  });
  await ownRecipe.save();
  return ownRecipe;
};

module.exports = {
  addRecipe,
};
