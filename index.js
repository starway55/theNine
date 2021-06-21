require('module-alias/register');
const express = require("express");
const bodyParser = require("body-parser");
const logger = require('@src/logger/logger');
const app = express();
const port = 8080;
const routes = require("@src/routes/routes");
const { handleJsonParseError } = require("@src/middleware/errorHandlingMiddleWare");

app.use(bodyParser.json());

app.get("/", function(req, res) {
  // logger.info("default route");
  res.status(400).send({
    error: "The default route is hit. It is not supported"
  });
})

app.use("/api", routes);
app.use(handleJsonParseError);

// request to handle undefined or all other routes
// app.get("*", function(req, res) {
//     logger.info("users route");
//     res.send("App works!!!!!");
// })

app.listen(port, function(err) {
    logger.info("running server on from port:::::::" + port);
});