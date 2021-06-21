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

// Sending status 200 to default route to pass AWS health check.
app.get("/", function(req, res) {
  res.status(200).send({
    info: "This is the default route. Server is healthy"
  });
})

app.use("/api", routes);
app.use(handleJsonParseError);

app.listen(port, function(err) {
  logger.info(`running server on from port::::::: + ${port}`);
});