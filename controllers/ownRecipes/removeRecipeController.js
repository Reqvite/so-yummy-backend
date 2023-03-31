const { removeOwnRecipe } = require("../../service/ownRecipes/removeOwnRecipe");

const removeRecipeController = async (req, res, next) => {
  const { _id } = req.user;
  await removeOwnRecipe(req.params.recipeId, _id);
  res.json({
    status: "success",
    code: 200,
    message: "Recipe deleted",
  });
};

module.exports = {
  removeRecipeController,
};
