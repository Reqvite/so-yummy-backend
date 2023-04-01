const { addOrRemoveIngredient } = require("../../service/shopping");

const addOrRemoveIngredientController = async (req, res) => {
  console.log(req.params.ingredientId);
  const { _id } = req.user;

  const recipe = await addOrRemoveIngredient(req.params.ingredientId, _id);
  res.status(201).json({ status: "succes", code: 201, recipe });
};

module.exports = {
  addOrRemoveIngredientController,
};
