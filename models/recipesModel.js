const { model, Schema } = require("mongoose");

const recipeSchema = Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  time: {
    type: Number,
    required: [true, "time is required"],
  },
  ingredients: {
    type: Array,
    default: [],
  },
  instructions: {
    type: String,
    required: [true, "instruction is required"],
  },
 favorites: [{
        type: Schema.Types.ObjectId,
        ref: "user",
    }, ],
  popularity: {
        type: Number,
    },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = {
  Recipe,
};
