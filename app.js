const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { authRouter } = require("./routes/api/authRouter");
const { recipesRouter } = require("./routes/api/recipesRouter");
const { errorHandler } = require("./helpers/apiHelpers");
const { ownRecipes } = require("./routes/api/ownRecipesRouter");
const { favoriteRouter } = require("./routes/api/");
const { shoppingRouter } = require("./routes/api");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/users", authRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/own-recipes", ownRecipes);
app.use("/api/favorite", favoriteRouter);
app.use("/api/shopping-list", shoppingRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler);

module.exports = app;
