CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    description TEXT,
    finished BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
);
