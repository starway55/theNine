const filterTvShows = (tvShowsRequestBody) => {

  const payload = tvShowsRequestBody.payload

  const filteredResults = [];
  payload.map(element => {
    if(element.drm === true && element.episodeCount > 0){
      filteredResults.push({
        image: element.image.showImage,
        slug: element.slug,
        title: element.title
      })
    }
  });

  return filteredResults;
}

module.exports = {
  filterTvShows
}