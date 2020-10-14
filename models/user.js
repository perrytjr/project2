
// This may be confusing but here Sequelize (capital) references the standard library


module.exports = function(sequelize, DataTypes) {

  const Users = sequelize.define("Users", {
    id: { type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
    
  fullname: DataTypes.STRING,
  username: DataTypes.STRING,
  bio: DataTypes.STRING,
  
});

return Users;

}


