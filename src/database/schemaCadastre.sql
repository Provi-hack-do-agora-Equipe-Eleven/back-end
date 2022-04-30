CREATE DATABASE provi;

CREATE TABLE users (
  id serial PRIMARY KEY,
  name varchar(60) NOT NULL,
  phone varchar(60) NOT NULL,
  email varchar(60) NOT NULL,
  password text NOT NULL
);