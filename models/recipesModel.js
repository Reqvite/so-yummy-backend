const { model, Schema, default: mongoose } = require("mongoose");

const recipeSchema = Schema(
  {
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
    thumb: {
      type: String,
      required: [true, "thumb is required"],
    },
    preview: {
      type: String,
      required: [true, "preview is required"],
    },
    instructions: {
      type: String,
      required: [true, "instruction is required"],
    },
    favorites: {
      type: Array,
      default: [],
    },
    popularity: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Array,
      default: [],
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = {
  Recipe,
};
