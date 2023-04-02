const { getRecipes } = require("./getRecipes");
const { getCategoryController } = require("./getCategoryController");
const { getCategoryPageController } = require("./getCategoryPageController");
const { getRecipeByIdController } = require("./getRecipeByIdController");
const { getPopularRecipes } = require("./getPopularRecipes");

module.exports = {
  getRecipes,
  getCategoryController,
  getCategoryPageController,
  getRecipeByIdController,
  getPopularRecipes,
};
