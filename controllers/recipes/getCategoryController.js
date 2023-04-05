const { getCategories } = require("../../service/recipesService");

const getCategoryController = async (req, res) => {
  res.json(getCategories());
};

module.exports = {
  getCategoryController,
};
