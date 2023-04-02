const { PopularRecipes } = require('../../models/popularRecipeModel');
const { RestApiError } = require('../../helpers/errors');

const updateRecipeById = async (idFood) => {
  const { data } = await PopularRecipes.findByIdAndUpdate(idFood);
  if (!data.food) {
    throw RestApiError(`Recipe by id: ${idFood} not found.`);
  }
  return data;
};
module.exports = {
  updateRecipeById,
};

