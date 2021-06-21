var express = require("express");
const { filterTvShows } = require("@services/tvShows");
const { FILTER_ERROR } = require("@src/constants");
app = express();

app.post("/filter", (req, res, next) => {

  try {
    const tvShowsBody = req.body;

    const filteredResults = filterTvShows(tvShowsBody);
  
    res.send({
      response: filteredResults
    });
  } catch (err){
    err.type = FILTER_ERROR
    next(err);
  }
});

module.exports = app;