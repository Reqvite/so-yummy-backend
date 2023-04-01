const { removeIngredient } = require("../../service/shopping");

const removeIngredientController = async (req, res, next) => {
  const { _id } = req.user;
  const ingredientId = await removeIngredient(req.params.ingredientId, _id);
  res.json({
    status: "success",
    code: 200,
    ingredientId,
  });
};

module.exports = {
  removeIngredientController,
};
