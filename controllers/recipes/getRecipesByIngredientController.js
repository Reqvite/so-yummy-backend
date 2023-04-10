const { getRecipesByIngredient } = require("../../service/recipesService");
const {
  RestApiError,
  ValidationError,
  WrongParametersError,
} = require("../../helpers/errors");

const getRecipesByIngredientController = async (req, res) => {
  try {
    const { ingredient, page = 1, limit = 10 } = req.query;

    if (!ingredient) {
      throw new ValidationError(
        "Enter the ingredient search parameter in the query"
      );
    }

    const {
      count,
      recipes,
      page: currentPage,
    } = await getRecipesByIngredient(ingredient, page, limit);

    const totalPages = Math.ceil(count / limit);

    if (count === 0) {
      throw new WrongParametersError(
        `No ingredient found with name containing '${ingredient}'`
      );
    }

    return res.status(200).json({ count, recipes, currentPage, totalPages });
  } catch (error) {
    if (error instanceof RestApiError) {
      return res
        .status(error.status)
        .json({ message: error.message, type: error.type });
    }
    return res
      .status(500)
      .json({ message: "Error fetching recipes by ingredient" });
  }
};

module.exports = {
  getRecipesByIngredientController,
};
