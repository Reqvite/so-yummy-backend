const { addRecipeController } = require("../ownRecipes/addRecipeController");
const {
  getOwnRecipesController,
} = require("../ownRecipes/getOwnRecipesController");
const {
  removeRecipeController,
} = require("../ownRecipes/removeRecipeController");

module.exports = {
  addRecipeController,
  getOwnRecipesController,
  removeRecipeController,
};
