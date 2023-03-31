const { addRecipe } = require("../../service/ownRecipes/addRecipe");

const addRecipeController = async (req, res) => {
  const { title, description, category, time, img, instructions } = req.body;

  const preview = req.file.path;
  const { _id } = req.user;

  const recipe = await addRecipe(
    title,
    description,
    category,
    time,
    preview,
    instructions,
    _id
  );
  res.status(201).json({ status: "succes", code: 201, recipe });
};

module.exports = {
  addRecipeController,
};
