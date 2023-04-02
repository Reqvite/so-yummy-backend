const { getRecipeById } = require("../../service/recipesServise");

async function getRecipeByIdController(req, res) {
  const { id } = req.params;

  const recipe = await getRecipeById(id);

  return res.json(recipe);
}

module.exports = {
  getRecipeByIdController,
};
