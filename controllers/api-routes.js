

// Requiring our Todo model
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.post("/api/signins", function(req, res) {
    console.log("hit in api-routes");
   console.log(req.body);
   db.Users.create({
     fullname: req.body.fullname,
     username: req.body.username,
     bio: req.body.bio
   })
   .then(function(dbUsers) {
    // We have access to the new todo as an argument inside of the callback function
    res.json(dbUsers);
 });
});



 // GET route for getting all of the users
 app.get("/api/users", function(req, res) {
  db.Users.findAll({}).then(function(dbUsers) {
    res.json(dbUsers);
  });
});
}