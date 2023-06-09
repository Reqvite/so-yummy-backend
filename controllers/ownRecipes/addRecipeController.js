const { addRecipe } = require("../../service/ownRecipes/addRecipe");
const { ObjectId } = require("mongodb");
const cloudinary = require("cloudinary").v2;

const addRecipeController = async (req, res) => {
  const {
    title,
    description,
    category,
    time,
    ingredients,
    image,
    instructions,
  } = req.body;

  const { _id } = req.user;

  const { url: preview } = await cloudinary.uploader.upload(image);

  const thumb = preview;
  const owner = _id;
  const formattedIngredients = ingredients.map((ingredient) => ({
    id: ObjectId(ingredient.id),
    measure: ingredient.measure,
  }));
  const recipe = await addRecipe(
    thumb,
    title,
    description,
    category,
    time,
    formattedIngredients,
    preview,
    instructions,
    owner
  );
  res.status(201).json({ status: "succes", code: 201, recipe });
};

module.exports = {
  addRecipeController,
};
