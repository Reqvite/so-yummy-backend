const { getIngredients } = require("../../service/ingredientsService");

const getIngredientsController = async (req, res) => {
  const ingredients = await getIngredients();
  return res.json(ingredients);
};

module.exports = {
  getIngredientsController,
};
