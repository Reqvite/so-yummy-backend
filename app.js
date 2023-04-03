require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { errorHandler } = require("./helpers/apiHelpers");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const { authRouter } = require("./routes/api/authRouter");
const { ownRecipesRouter } = require("./routes/api/ownRecipesRouter");

const {
  recipesRouter,
  ingredientsRouter,
  shoppingRouter,
  favoriteRouter,
  popularRecipeRouter,
} = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(logger(formatsLogger));
app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api/users", authRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/favorite", favoriteRouter);
app.use("/api/own-recipes", ownRecipesRouter);
app.use("/api/popular-recipes", popularRecipeRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/shopping-list", shoppingRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler);

module.exports = app;
