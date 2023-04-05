const { categoriesArr } = require("../../data/categoriesArr");

const getCategories = () => {
  return categoriesArr;
};

module.exports = {
  getCategories,
};
