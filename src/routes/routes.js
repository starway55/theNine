var express = require("express");
const { handleNotFoundError, handleError } = require('../middleware/errorHandlingMiddleWare');
apiRouter = express();

apiRouter.use("/tvShow", require('./tvShows/tvShows'));
apiRouter.post('*', handleNotFoundError);
apiRouter.get('*', handleNotFoundError);
apiRouter.use(handleError);

module.exports = apiRouter;