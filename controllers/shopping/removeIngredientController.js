const { removeIngredient } = require("../../service/shopping");

const removeIngredientController = async (req, res, next) => {
  const { _id } = req.user;
  const { ingredientId: id, recipeId } = req.params;
  const data = await removeIngredient(id, _id, recipeId);
  res.json({
    status: "success",
    code: 200,
    data,
  });
};

module.exports = {
  removeIngredientController,
};
