const { addIngredient } = require("../../service/shopping");

const addIngredientController = async (req, res) => {
  const { recipeId, ingredientId } = req.body;

  const shoppingList = await addIngredient(recipeId, ingredientId, req.user);
  res.status(201).json({ status: "succes", code: 201, shoppingList });
};

module.exports = {
  addIngredientController,
};
