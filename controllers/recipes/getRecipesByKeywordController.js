const { getRecipesByKeyword } = require("../../service/recipesService");

const getRecipesByKeywordController = async (req, res) => {
  const { query, page = 1, limit = 10 } = req.query;

  const { results, count } = await getRecipesByKeyword(query, page, limit);

  const totalPages = Math.ceil(count / limit);
  const currentPage = page > totalPages ? totalPages : page;
  const response = {
    results,
    totalPages,
    currentPage,
    totalResults: count,
  };
  res.json(response);
};

module.exports = {
  getRecipesByKeywordController,
};
