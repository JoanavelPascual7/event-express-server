-- Drop the database if it exists
DROP DATABASE IF EXISTS events_dev;

-- Create the events_dev database
CREATE DATABASE events_dev;
\c events_dev;

-- Create the events table
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  date TEXT,
  location TEXT,
  rating FLOAT,
  comment TEXT,
  is_favorite BOOLEAN,
  user_name TEXT
);

-- Create the users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  verified BOOLEAN,
  admin BOOLEAN
);

DROP TABLE IF EXISTS reviews;

-- Create the reviews table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer TEXT NOT NULL,
  event TEXT NOT NULL,
  review TEXT,
  rating FLOAT,
  event_id INTEGER REFERENCES events(id)
);

-- Create a junction table for users and events (assuming you have a many-to-many relationship)
CREATE TABLE users_events (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  event_id INTEGER REFERENCES events(id)
);
