const { Recipe } = require("../../models/recipesModel");

const addRecipe = async (
  thumb,
  title,
  description,
  category,
  time,
  ingredients,
  preview,
  instructions,
  owner
) => {
  const ownRecipe = new Recipe({
    thumb,
    title,
    description,
    category,
    time,
    ingredients,
    preview,
    instructions,
    owner,
  });
  await ownRecipe.save();
  return ownRecipe;
};

module.exports = {
  addRecipe,
};
