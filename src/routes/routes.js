var express = require("express");
const { handleNotFoundError, handleFilterError } = require('@src/middleware/errorHandlingMiddleWare');
const tvShowsController = require("@routes/tvShows/tvShowsController.js")
apiRouter = express();

apiRouter.use("/tvShow", tvShowsController);
apiRouter.post('*', handleNotFoundError);
apiRouter.get('*', handleNotFoundError);
apiRouter.use(handleFilterError);

module.exports = apiRouter;