var express = require("express");
const { handleNotFoundError, handleFilterError } = require('@src/middleware/errorHandlingMiddleWare');
const tvShows = require("@routes/tvShows/tvShows.js")
apiRouter = express();

apiRouter.use("/tvShow", tvShows);
apiRouter.post('*', handleNotFoundError);
apiRouter.get('*', handleNotFoundError);
apiRouter.use(handleFilterError);

module.exports = apiRouter;