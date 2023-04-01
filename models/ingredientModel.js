const { model, Schema } = require("mongoose");

const ingredientSchema = Schema({
  ttl: {
    type: String,
    required: [true, "title is required"],
  },
  desc: {
    type: String,
    required: [true, "description is required"],
  },
  t: {
    type: String,
    default: "",
  },
  thb: {
    type: String,
    required: [true, "Url is required"],
  },
});

const Ingredient = model("Ingredient", ingredientSchema);

module.exports = {
  Ingredient,
};
