const logger = require('@src/logger/logger');
const { FILTER_ERROR } = require("@src/constants");

const handleNotFoundError = (req, res) => {

  logger.error("cannot find API endpoint");
  return res.status(404).send({
    error: "Cannot find API endpoint"
  })
}

const handleJsonParseError = (err, req, res, next) => {

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      logger.error(err);
      return res.status(400).send({
        error: "Could not decode request: JSON parsing failed"
      });
  }

  next();
};

const handleFilterError = (err, req, res, next) => {

  if(err.type === FILTER_ERROR){
    logger.error(`Error when parsing json: ${err}`);
    return res.status(400).send({
      error: "There is an error in the tvShow filter API"
    })
  }

  logger.error(`An error occured: ${err}`);
  return res.status(500).send({
    error: "An error occured during your request."
  });
}

module.exports = {
  handleJsonParseError,
  handleNotFoundError,
  handleFilterError
}