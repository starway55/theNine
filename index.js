require('module-alias/register');
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require('@src/logger/logger');
const app = express();
const port = process.env.PORT;
const routes = require("@src/routes/routes");
const { handleJsonParseError } = require("@src/middleware/errorHandlingMiddleWare");

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.status(400).send({
    error: "The default route is hit. It is not supported"
  });
})

app.use("/api", routes);
app.use(handleJsonParseError);

app.listen(port, function(err) {
  logger.info(`running server on from port::::::: + ${port}`);
});