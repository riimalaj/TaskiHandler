CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    description TEXT,
    user_token TEXT,
    finished BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
);
