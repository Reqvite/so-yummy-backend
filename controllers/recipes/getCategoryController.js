const { getCategories } = require("../../service/recipesServise");

const getCategoryController = async (req, res) => {
  res.json(getCategories());
};

module.exports = {
  getCategoryController,
};
