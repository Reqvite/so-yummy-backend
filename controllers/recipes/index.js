const { getCategoryController } = require("./getCategoryController");
const { getCategoryPageController } = require("./getCategoryPageController");
const { getRecipeByIdController } = require("./getRecipeByIdController");
const {
  getPopularRecipesController,
} = require("./getPopularRecipesController");

module.exports = {
  getCategoryController,
  getCategoryPageController,
  getRecipeByIdController,
  getPopularRecipesController,
};
