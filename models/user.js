
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var User = sequelize.define("character", {
  id: Sequelize.INTEGER,
  fullname: Sequelize.STRING,
  username: Sequelize.STRING,
  bio: Sequelize.STRING,
  
});

// Syncs with DB
Character.sync()

module.exports = User;