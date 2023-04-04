const { getCategories } = require("./getCategoryList");
const { getCategoryPage } = require("./getCategoryPage");
const { getRecipeById } = require("./getRecipeById");
const { getRecipesByKeywordService } = require("./getRecipesByKeywordService");

module.exports = {
  getCategories,
  getCategoryPage,
  getRecipeById,
  getRecipesByKeywordService,
};
