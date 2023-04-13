const { Recipe } = require("../../models/recipesModel");
const { getOwnRecipes } = require("../../service/ownRecipes/getOwnRecipes");

const getOwnRecipesController = async (req, res) => {
  const { _id } = req.user;
  const page = parseInt(req.query.page) || 1;
  const limit = 4;
  const startIndex = (page - 1) * limit;

  if (req.query.page === "undefined") {
    const recipes = await Recipe.find({ owner: _id });
    res.json({
      status: "success",
      code: 200,
      recipes,
      currentPage: 0,
      totalPages: 0,
    });
  } else {
    const { recipes, count } = await getOwnRecipes(limit, startIndex, _id);
    console.log(2);
    res.json({
      status: "success",
      code: 200,
      recipes,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
    });
  }
};

module.exports = {
  getOwnRecipesController,
};
