CREATE DATABASE trashortreasure;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    email VARCHAR(100) REFERENCES users(email),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
