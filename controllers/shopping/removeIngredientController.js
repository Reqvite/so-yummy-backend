const { removeIngredient } = require("../../service/shopping");

const removeIngredientController = async (req, res, next) => {
  const { _id } = req.user;
  await removeIngredient(req.params.ingredientId, _id);
  res.json({
    status: "success",
    code: 200,
    message: "Ingredinet deleted",
  });
};

module.exports = {
  removeIngredientController,
};
