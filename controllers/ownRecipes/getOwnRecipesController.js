const { getOwnRecipes } = require("../../service/ownRecipes/getOwnRecipes");

const getOwnRecipesController = async (req, res) => {
  const { _id } = req.user;
  const page = parseInt(req.query.page) || 1;
  const limit = 4;
  const startIndex = (page - 1) * limit;

  const { recipes, count } = await getOwnRecipes(limit, startIndex, _id);

  res.json({
    status: "success",
    code: 200,
    recipes,
    currentPage: page,
    totalPages: Math.ceil(count / limit),
  });
};

module.exports = {
  getOwnRecipesController,
};
