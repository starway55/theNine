require('module-alias/register')
var express = require("express"),
bodyParser = require("body-parser"),
logger = require('./src/logger/logger'),
app = express(),
port = 8080;

app.use(bodyParser.json());

app.get("/", function(req, res) {
    // logger.info("default route");
    res.send({
      error: "The default route is hit. It is not supported"
    });
})

app.use("/api", require("./src/routes/routes"));

// request to handle undefined or all other routes
// app.get("*", function(req, res) {
//     logger.info("users route");
//     res.send("App works!!!!!");
// })

app.listen(port, function(err) {
    logger.info("running server on from port:::::::" + port);
});