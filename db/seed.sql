\c events_dev;

-- Insert data into the events table
INSERT INTO events (name, date, location, rating, comment, is_favorite, user_name) VALUES
('Knicks last home game of the 22-23 season', '2023-05-06', 'Madison Square Garden 4 Pennsylvania Plaza, New York, NY 10001', 4.5, 'Great experience, I brought my son to the game and he got to see them win which meant a lot', true, 'john_doe'),
('Koronet Pizza', '2023-08-16', '2848 Broadway, New York, NY 10025', 4.8, 'Classic neighborhood staple, great pizza reliably at least since 2003 for me', true, 'jane_smith');

-- Insert data into the users table
INSERT INTO users (username, verified, admin) VALUES
('alice', true, false),
('bob', true, true);

-- Insert data into the reviews table
INSERT INTO reviews (reviewer, event, review, rating, event_id) VALUES
('alice_smith', 'Knicks last home game of the 22-23 season', 'Great game, exciting match', 4.7, 1),
('bob_allen', 'Koronet Pizza', 'Huge slices, loved it', 4.5, 2);


-- Insert data into the users_events junction table
INSERT INTO users_events (user_id, event_id) VALUES
(1, 1),
(2, 2);
