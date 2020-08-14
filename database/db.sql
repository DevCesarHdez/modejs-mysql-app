CREATE DATABASE database_links;

use database_links;

CREATE TABLE users(
  id INT(11) NOT NULL,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
  ADD PRIMARY KEY (id);

ALTER TABLE users
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

DESCRIBE users;

--Links table
CREATE TABLE links(
  id INT(11) NOT NULL,
  title VARCHAR(150) NOT NULL,
  url VARCHAR(250) NOT NULL,
  description TEXT,
  user_id INT(11),
  create_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links
  ADD PRIMARY KEY (id);

ALTER TABLE Links
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

--No usar, solo para desarrollo antes de guardar los user_id
ALTER TABLE links
  MODIFY user_id INT(11) NOT NULL;
