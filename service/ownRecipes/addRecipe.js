const { OwnRecipe } = require("../../models/ownRecipeModel");

const addRecipe = async (
  title,
  description,
  category,
  time,
  preview,
  instructions,
  _id
) => {
  const ownRecipe = new OwnRecipe({
    title,
    description,
    category,
    time,
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
