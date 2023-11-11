-- Insert dummy users
INSERT INTO users (username, email, password_hash)
VALUES
  ('john_doe', 'john@example.com', 'hashed_password_1'),
  ('jane_smith', 'jane@example.com', 'hashed_password_2');

-- Insert dummy items
INSERT INTO items (user_id, email, name, description)
VALUES
  (1, 'john@example.com', 'Old Book', 'A classic novel in good condition.'),
  (2,
