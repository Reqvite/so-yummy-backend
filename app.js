const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { authRouter } = require("./routes/api/authRouter");
const { errorHandler } = require("./helpers/apiHelpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);

app.use(errorHandler);

module.exports = app;
