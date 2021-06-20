// import { Express } from 'express'
// import { Response, Request } from 'express'
// import { StatusConstants } from '../constants/StatusConstants'
const logger = require('../logger/logger');

// export class ErrorHandlingMiddleware {

//     app: Express

//     constructor(_app: Express) {
//         this.app = _app
//     }

//     public async handle404Error() {
//         this.app.use((req: Request, resp: Response) => {
//             resp.status(StatusConstants.code404).send(StatusConstants.code404Message)
//         })
//     }

// }

const handleNotFoundError = (req, res) => {

  logger.error("cannot find API endpoint");
  return res.status(404).send({
    error: "Cannot find API endpoint"
  })
}

const handleJsonParseError = (err, req, res, next) => {
  // This check makes sure this is a JSON parsing issue, but it might be
  // coming from any middleware, not just body-parser:

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      console.error(err);
      return res.status(400).send({
        error: "Could not decode request: JSON parsing failed"
      }); // Bad request
  }

  next();
};

const handleError = (err, req, res, next) => {

  logger.info("debug: inside error handler middleware");
  logger.info("req.body");
  logger.info(req.body);

  if(err.type === "jsonParsingError"){
    logger.error(`Error when parsing json: ${err}`);
    return res.status(400).send({
      error: "Could not decode request: JSON parsing failed"
    })
  }

  logger.error("An error occured");
  return res.status(500).send({
    error: "An error occured during your request."
  });

  // logger.error(`Error when parsing json: ${err}`);
  // res.status(400).send({
  //   error: "Could not decode request: JSON parsing failed"
  // })
}

module.exports = {
  handleJsonParseError,
  handleNotFoundError,
  handleError
}