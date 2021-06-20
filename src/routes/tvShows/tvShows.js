var express = require("express");
const logger = require("../../logger/logger");
app = express();

app.post("/filter", (req, res, next) => {

  try {
    logger.info("inside filter endpoint");

    const payload = req.body.payload;

  
    const filteredResults = [];
    payload.map(element => {
      if(element.drm === true && element.episodeCount > 0){
        filteredResults.push({
          image: element.image,
          slug: element.slug,
          title: element.title
        })
      }
    });
  
    res.send({
      response: filteredResults
    });
  } catch (err){
    logger.info("req.body")
    logger.info(req.body);
    logger.info("error caught");
    err.type = "filterError"
    next(err);
  }
});

module.exports = app;