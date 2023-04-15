const { removeIngredient } = require("../../service/shopping");

const removeIngredientController = async (req, res, next) => {
  const { ingredientId: id, recipeId } = req.params;
  const data = await removeIngredient(id, req.user, recipeId);
  res.json({
    status: "success",
    code: 200,
    data,
  });
};

module.exports = {
  removeIngredientController,
};
