DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;
DROP TABLE IF EXISTS blog.post;
CREATE TABLE blog.post (
  id INTEGER NOT NULL PRIMARY KEY,
  title VARCHAR(64) NOT NULL,
  body VARCHAR(4096) NOT NULL,
  published BOOLEAN NOT NULL,
  published_at DATETIME NOT NULL
);