const { model, Schema, mongoose } = require("mongoose");

const ownRecipeSchema = Schema(
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
    instructions: {
      type: String,
      required: [true, "instruction is required"],
    },
    favorites: {
      type: Array,
      default: [],
    },
    preview: {
      type: String,
      // required: [true, "preview is required"],
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const OwnRecipe = model("OwnRecipe", ownRecipeSchema);

module.exports = {
  OwnRecipe,
};
