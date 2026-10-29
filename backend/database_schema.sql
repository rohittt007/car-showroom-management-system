-- CSMS Database Schema
-- Car Showroom Management System

-- Create Database
CREATE DATABASE IF NOT EXISTS csms_db;
USE csms_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  password VARCHAR(255),
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('active', 'inactive') DEFAULT 'active'
);

-- Login Records Table
CREATE TABLE IF NOT EXISTS login_records (
  login_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  username VARCHAR(255),
  login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('Success', 'Failed') DEFAULT 'Success',
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Cars Table
CREATE TABLE IF NOT EXISTS cars (
  car_id INT AUTO_INCREMENT PRIMARY KEY,
  car_name VARCHAR(255) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(100),
  price DECIMAL(12, 2) NOT NULL,
  availability ENUM('Available', 'Booked', 'Sold') DEFAULT 'Available',
  description TEXT,
  image_url VARCHAR(255),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  car_id INT,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('Pending', 'Confirmed', 'Completed', 'Cancelled') DEFAULT 'Pending',
  total_price DECIMAL(12, 2),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (car_id) REFERENCES cars(car_id) ON DELETE CASCADE
);

-- Sample Data
INSERT INTO users (name, email, phone) VALUES
('John Doe', 'john@email.com', '+91-9876543210'),
('Jane Smith', 'jane@email.com', '+91-9123456789'),
('Mike Johnson', 'mike@email.com', '+91-9999888877');

INSERT INTO login_records (username, status) VALUES
('john@email.com', 'Success'),
('jane@email.com', 'Success'),
('admin@email.com', 'Success'),
('user3@email.com', 'Failed');

INSERT INTO cars (car_name, brand, model, price, availability) VALUES
('BMW M3', 'BMW', 'M Series', 6500000, 'Available'),
('Hyundai Creta', 'Hyundai', 'SUV', 1200000, 'Available'),
('Mahindra XUV700', 'Mahindra', 'SUV', 1500000, 'Booked'),
('Toyota Fortuner', 'Toyota', 'SUV', 3500000, 'Available'),
('Tata Nexon', 'Tata', 'Compact SUV', 800000, 'Sold');

-- Create Indexes for better performance
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_car_brand ON cars(brand);
CREATE INDEX idx_login_time ON login_records(login_time);
CREATE INDEX idx_order_status ON orders(status);
