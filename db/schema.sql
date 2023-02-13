DROP DATABASE IF EXISTS store_inventory;
CREATE DATABASE store_inventory;

\c store_inventory;

DROP TABLE IF EXISTS inventory;
CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT DEFAULT'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image',
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    price FLOAT NOT NULL,
    in_stock INTEGER NOT NULL,
    is_favorite BOOLEAN,
    save_for_later BOOLEAN
);


DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 reviewer TEXT,
 title TEXT,
 content TEXT,
 rating NUMERIC,
 CHECK (rating >= 0 AND rating <= 5),
 item_id INTEGER REFERENCES inventory (id)
 ON DELETE CASCADE
);
