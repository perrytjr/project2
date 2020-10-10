
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Users = sequelize.create("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
  fullname: Sequelize.STRING,
  username: Sequelize.STRING,
  bio: Sequelize.STRING,
  
});

// Syncs with DB
Users.sync()

module.exports = Users;