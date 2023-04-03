const { getCategoryController } = require("./getCategoryController");
const { getCategoryPageController } = require("./getCategoryPageController");
const { getRecipeByIdController } = require("./getRecipeByIdController");
const { getRecipesController } = require("./getRecipesController");
const {
  getRecipesByKeywordController,
} = require("./getRecipesByKeywordController");

const {
  getPopularRecipesController,
} = require("./getPopularRecipesController");

module.exports = {
  getRecipesController,
  getCategoryController,
  getCategoryPageController,
  getRecipeByIdController,
  getRecipesByKeywordController,
  getPopularRecipesController,
};
