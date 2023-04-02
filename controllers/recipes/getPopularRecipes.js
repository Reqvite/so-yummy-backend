const { PopularRecipes } = require('../../models/popularRecipeModel');

const getPopularRecipes = async (req, res) => {
  const data = await PopularRecipes.find(
    {
      idFood: { $exists: true },
    },
    '-_id -users'
  );

  res.json({ food: data });
};

module.exports = {
  getPopularRecipes,
};
