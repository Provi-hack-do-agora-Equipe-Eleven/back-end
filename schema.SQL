CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  owner_name TEXT NOT NULL,
  owner_email TEXT NOT NULL,
  website TEXT,
  pix TEXT,
  description TEXT NOT NULL,
  instagram TEXT,
  cnpj TEXT,
  project_image TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  modified_at TIMESTAMPTZ NOT NULL,
  user_id INT REFERENCES users(id)
);


CREATE TABLE adresses (
  id SERIAL PRIMARY KEY,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zipcode TEXT NOT NULL,
  country TEXT NOT NULL,
  street TEXT,
  complement TEXT,
  project_id INT REFERENCES projects(id)
);