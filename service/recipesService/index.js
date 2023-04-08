const { getCategories } = require("./getCategoryList");
const { getCategoryPage } = require("./getCategoryPage");
const { getRecipesByKeyword } = require("./getRecipesByKeyword");
const { getRecipesByIngredient } = require("./getRecipesByIngredient");

module.exports = {
  getCategories,
  getCategoryPage,
  getRecipesByKeyword,
  getRecipesByIngredient,
};
