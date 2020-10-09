### Schema

<<<<<<< HEAD

DROP DATABASE IF EXISTS chat_roomDB;

CREATE DATABASE chat_roomDB;

USE chat_roomDB;
--will we prompt the user for hobbies/short story? how will we do so. How will we connect the user info to mysql?
CREATE TABLE users (
  id INT NOT NULL,
  fullname VARCHAR(45) NULL,
  username VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (fullname, username)
VALUES ("Bob", "Bobby")




--CREATE TABLE  we have to think about how we want to create our table. Do we only need one that stores, Full Name,
--User Name, Bio, and their Posts?
=======
CREATE DATABASE chatroom;

USE chatroom;

--CREATE TABLE   Thursday we can see how we want to set up the tables for the database 
-- going off the sign in page will have to store their Full Name, Username, Bio, and then their Posts they make in the chat?-
>>>>>>> perry
