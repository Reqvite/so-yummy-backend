const { getIngredients } = require("../../service/ingredientsServise");

const getIngredientsController = async (req, res) => {
  const ingredients = await getIngredients();
  return res.json(ingredients);
};

module.exports = {
  getIngredientsController,
};
