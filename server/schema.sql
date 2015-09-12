CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userID int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (userID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  userID int,
  message varchar(140),
  roomname varchar(20),
  FOREIGN KEY (userID) REFERENCES users(userID)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

