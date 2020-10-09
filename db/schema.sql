### Schema


DROP DATABASE IF EXISTS chat_roomDB;

CREATE DATABASE chat_roomDB;

USE chat_roomDB;
--will we prompt the user for hobbies/short story? how will we do so. How will we connect the user info to mysql?
CREATE TABLE users (
  id INT NOT NULL  AUTO_INCREMENT,
  fullname VARCHAR(45) NOT  NULL,
  username VARCHAR(45) NOT NULL,
  bio VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (fullname, username)
VALUES ("Bob", "Bobby")




--CREATE TABLE  we have to think about how we want to create our table. Do we only need one that stores, Full Name,
--User Name, Bio, and their Posts?