const { getRecipes } = require("./mainPage");
const { getCategoryController } = require("./getCategoryController");
const { getCategoryPageController } = require("./getCategoryPageController");
const { getRecipeByIdController } = require("./getRecipeByIdController");

module.exports = {
  getRecipes,
  getCategoryController,
  getCategoryPageController,
  getRecipeByIdController,
};
