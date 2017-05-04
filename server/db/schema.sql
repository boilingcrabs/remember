DROP DATABASE IF EXISTS remember;

CREATE DATABASE remember;

USE remember;

CREATE TABLE user(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  password CHAR(255),
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  UNIQUE INDEX(username)
);

CREATE TABLE picture(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  picture_url VARCHAR(255),
  picture_owner VARCHAR(255),
  UNIQUE INDEX(username),
  FOREIGN KEY (picture_owner) REFERENCES user(id),
);

CREATE TABLE scoreboard(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userid VARCHAR(255),
  FOREIGN KEY (userid) REFERENCES user(id)
)

