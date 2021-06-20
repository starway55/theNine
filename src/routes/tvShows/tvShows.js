var express = require("express");
// bodyParser = require("body-parser"),
// logger = require('../../logger/logger'),
const logger = require("../../logger/logger");
app = express();

app.post("/filter", (req, res, next) => {

  try {
    logger.info("inside filter endpoint");
    // console.log(req.body);
    // const body = req.body;
    console.log("originalurl");
    console.log(req.originalUrl)
    const payload = req.body.payload;
  
    // const filteredShows = payload.filter(show => {
    //   return show.drm === true && show.episodeCount > 0
    // });
  
    // console.log(payload.length);
    // console.log(filteredShows.length);
  
    const filteredResults = [];
    payload.map(element => {
      if(element.drm === true && element.episodeCount > 0){
        filteredResults.push({
          image: element.image,
          slug: element.slug,
          title: element.title
        })
      }
    });
  
    res.send({
      response: filteredResults
    });
  } catch (err){
    err.type = "jsonParsingError"
    next(err);
  }
});

// array to hold users
// const users = [{firstName:"fnam1",lastName:"lnam1",userName:"username1"}];

// // request to get all the users
// app.get("/users", function(req, res) {
//     logger.info("users route");
//     res.json(users);
// })

// // request to get all the users by userName
// app.get("/users/:userName", function(req, res) {
//     logger.info("filter users by username:::::"+req.params.userName);
//     let user = users.filter(function(user){
//         if(req.params.userName === user.userName){
//             return user;
//         }
//     })
//     res.json(user);
// })

// // request to post the user
// //req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
// app.post("/user", function(req, res) {
//     users.push(req.body);
//     res.json(users);
// })

module.exports = app;