const { getCategoryPage } = require("../../service/recipesService");

const getCategoryPageController = async (req, res) => {
  const { category } = req.params;
  let { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;
  limit = parseInt(limit) > 8 ? 8 : parseInt(limit);

  const [recipes, totalCount] = await getCategoryPage(category, skip, limit);

  return res.json({
    totalCount,
    currentPage: parseInt(page),
    recipes,
    skip,
    limit,
  });
};

module.exports = {
  getCategoryPageController,
};
