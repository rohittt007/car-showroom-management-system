const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

// SQLite Database Path
const dbPath = path.join(__dirname, 'csms.db');

// Create/Open SQLite Database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Database Error:', err.message);
  } else {
    console.log('✅ SQLite Database Connected Successfully!');
  }
});

// Enable foreign keys
db.run('PRAGMA foreign_keys = ON');

// Initialize Database Tables
const initializeDatabase = () => {
  db.serialize(() => {
    // Create Users Table
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phone TEXT,
        password TEXT,
        registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'active'
      )
    `);

    // Create Login Records Table
    db.run(`
      CREATE TABLE IF NOT EXISTS login_records (
        login_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        username TEXT,
        login_time DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'Success',
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
      )
    `);

    // Create Cars Table
    db.run(`
      CREATE TABLE IF NOT EXISTS cars (
        car_id INTEGER PRIMARY KEY AUTOINCREMENT,
        car_name TEXT NOT NULL,
        brand TEXT NOT NULL,
        model TEXT,
        price REAL NOT NULL,
        availability TEXT DEFAULT 'Available',
        description TEXT,
        image_url TEXT,
        created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_date DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create Orders Table
    db.run(`
      CREATE TABLE IF NOT EXISTS orders (
        order_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        car_id INTEGER,
        order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'Pending',
        total_price REAL,
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
        FOREIGN KEY (car_id) REFERENCES cars(car_id) ON DELETE CASCADE
      )
    `);

    // Insert sample data if tables are empty
    db.run('SELECT COUNT(*) as count FROM users', (err, row) => {
      if (row && row.count === 0) {
        // Sample Users
        db.run(`
          INSERT INTO users (name, email, phone) VALUES
          ('John Doe', 'john@email.com', '+91-9876543210'),
          ('Jane Smith', 'jane@email.com', '+91-9123456789'),
          ('Mike Johnson', 'mike@email.com', '+91-9999888877')
        `);

        // Sample Login Records
        db.run(`
          INSERT INTO login_records (username, status) VALUES
          ('john@email.com', 'Success'),
          ('jane@email.com', 'Success'),
          ('admin@email.com', 'Success'),
          ('user3@email.com', 'Failed')
        `);

        // Sample Cars
        db.run(`
          INSERT INTO cars (car_name, brand, model, price, availability) VALUES
          ('BMW M3', 'BMW', 'M Series', 6500000, 'Available'),
          ('Hyundai Creta', 'Hyundai', 'SUV', 1200000, 'Available'),
          ('Mahindra XUV700', 'Mahindra', 'SUV', 1500000, 'Booked'),
          ('Toyota Fortuner', 'Toyota', 'SUV', 3500000, 'Available'),
          ('Tata Nexon', 'Tata', 'Compact SUV', 800000, 'Sold')
        `);

        console.log('✅ Database tables initialized with sample data!');
      }
    });
  });
};

// Initialize on startup
initializeDatabase();

// Helper function to run async queries
const dbRun = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
};

// Helper function to get single row
const dbGet = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

// Helper function to get all rows
const dbAll = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows || []);
    });
  });
};

module.exports = { db, dbRun, dbGet, dbAll };
