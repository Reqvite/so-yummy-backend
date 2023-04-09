const { NotAuthorizideError } = require("../../helpers/errors");
const { Recipe } = require("../../models/recipesModel");
const { User } = require("../../models/userModel");

const getOwnRecipesController = async (req, res) => {
  const { _id } = req.user;
  const page = parseInt(req.query.page) || 1;
  const limit = 4;
  const startIndex = (page - 1) * limit;

  const user = await User.findOne({ _id });

  if (!user) {
    throw new NotAuthorizideError("Email or password is wrong");
  }

  const count = await Recipe.countDocuments({ owner: _id });
  const recipes = await Recipe.find({ owner: _id })
    .skip(startIndex)
    .limit(limit);

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
