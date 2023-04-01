const { getRecipeById } = require("../../service/recipesServise");
const { WrongParametersError } = require("../../helpers/errors");

async function getRecipeByIdController(req, res, next) {
  const { id } = req.params;

  const recipe = await getRecipeById(id);

  if (!recipe) {
    next(new WrongParametersError(`Recipe with id=${id} is not found!`));
  }
  return res.json(recipe);
}

module.exports = {
  getRecipeByIdController,
};
