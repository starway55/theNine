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
  res.status(404).send({
    error: "Cannot find API endpoint"
  })
}

const handleError = (err, req, res, next) => {

  if(err.type === "jsonParsingError"){
    logger.error(`Error when parsing json: ${JSON.stringify(err)}`);
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
  handleNotFoundError,
  handleError
}