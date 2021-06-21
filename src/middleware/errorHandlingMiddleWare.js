const logger = require('@src/logger/logger');

const handleNotFoundError = (req, res) => {

  logger.error("cannot find API endpoint");
  return res.status(404).send({
    error: "Cannot find API endpoint"
  })
}

const handleJsonParseError = (err, req, res, next) => {

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      console.error(err);
      return res.status(400).send({
        error: "Could not decode request: JSON parsing failed"
      });
  }

  next();
};

const handleFilterError = (err, req, res, next) => {

  logger.info("debug: inside error handler middleware");
  logger.info("req.body");
  logger.info(req.body);

  if(err.type === "filterError"){
    logger.error(`Error when parsing json: ${err}`);
    return res.status(400).send({
      error: "There is an error in the tvShow filter API"
    })
  }

  logger.error("An error occured");
  logger.error(err);
  return res.status(500).send({
    error: "An error occured during your request."
  });
}

module.exports = {
  handleJsonParseError,
  handleNotFoundError,
  handleFilterError
}