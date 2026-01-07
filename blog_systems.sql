-- Blog System Database Schema

-- Create Database
CREATE DATABASE blog_system;
USE blog_system;

-- Users Table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Posts Table
CREATE TABLE posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    content TEXT NOT NULL,

    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
);

-- Comments Table
CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    comment_text TEXT NOT NULL,

    FOREIGN KEY (post_id)
    REFERENCES posts(post_id),
    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
);
