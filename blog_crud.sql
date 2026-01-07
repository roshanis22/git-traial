-- ===============================
-- Blog Database CRUD Operations
-- ===============================

USE blog_system;

-- ===============================
-- INSERT QUERIES (Create)
-- ===============================

-- Insert users
INSERT INTO users (username, email, password)
VALUES
('admin', 'admin@gmail.com', 'admin123'),
('roshni', 'roshni@gmail.com', 'roshni123');

-- Insert posts
INSERT INTO posts (user_id, title, content)
VALUES
(1, 'First Blog Post', 'This is my first blog post'),
(2, 'Learning SQL', 'SQL CRUD operations explained');

-- Insert comments
INSERT INTO comments (post_id, user_id, comment_text)
VALUES
(1, 2, 'Nice post!'),
(2, 1, 'Very informative');

-- ===============================
-- SELECT QUERIES (Read)
-- ===============================

-- Select all users
SELECT * FROM users;

-- Select posts by specific user
SELECT * FROM posts WHERE user_id = 1;

-- Select comments for a specific post
SELECT * FROM comments WHERE post_id = 1;

-- Select posts with title containing 'SQL'
SELECT * FROM posts WHERE title LIKE '%SQL%';

-- ===============================
-- UPDATE QUERIES
-- ===============================

-- Update user email
UPDATE users
SET email = 'admin@blog.com'
WHERE user_id = 1;

-- Update post title
UPDATE posts
SET title = 'Updated Blog Post Title'
WHERE post_id = 1;

-- ===============================
-- DELETE QUERIES
-- ===============================

-- Delete a comment
DELETE FROM comments
WHERE comment_id = 2;

-- Delete a post
DELETE FROM posts
WHERE post_id = 2;
