

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.Users.create({
      fullname: req.body.fullname,
      username: req.body.username,
      bio: req.body.bio
    })
    console.log(fullname)
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });
};
