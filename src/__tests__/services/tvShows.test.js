const { filterTvShows } = require("@services/tvShows");
const { sampleTvShows, sampleFilterTvShowsOutput } = require("@src/constants.js");

test("filterTvShows filters tvShows payload into correct format", () => {

  const filteredTvShows = filterTvShows(sampleTvShows);

  expect(filteredTvShows).toEqual(sampleFilterTvShowsOutput);
});