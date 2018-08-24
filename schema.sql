DROP DATABASE IF EXISTS friend_finderDB;
CREATE DATABASE friend_finderDB;

USE friend_finderDB;

CREATE TABLE friends (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    photo VARCHAR(300) NOT NULL,
    questions VARCHAR(100) NOT NULL
);