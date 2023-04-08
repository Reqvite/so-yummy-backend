const { getCategories } = require("./getCategoryList");
const { getCategoryPage } = require("./getCategoryPage");
const { getRecipeById } = require("./getRecipeById");
const { getRecipesByKeyword } = require("./getRecipesByKeyword");
const { getRecipesByIngredient } = require("./getRecipesByIngredient");

module.exports = {
  getCategories,
  getCategoryPage,
  getRecipeById,
  getRecipesByKeyword,
  getRecipesByIngredient
};
