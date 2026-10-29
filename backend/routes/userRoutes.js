const express = require('express');
const { dbRun, dbGet, dbAll } = require('../db');

const router = express.Router();

// Get all registered users
router.get('/users', async (req, res) => {
  try {
    const rows = await dbAll(`
      SELECT 
        user_id as id,
        name,
        email,
        phone,
        registration_date as registrationDate
      FROM users
      ORDER BY registration_date DESC
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Register new user
router.post('/users', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const result = await dbRun(
      'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
      [name, email, phone || null, password || null]
    );
    
    res.status(201).json({
      id: result.id,
      name,
      email,
      phone,
      registrationDate: new Date()
    });
  } catch (error) {
    console.error('Error registering user:', error);
    if (error.message.includes('UNIQUE constraint failed')) {
      res.status(409).json({ error: 'Email already registered' });
    } else {
      res.status(500).json({ error: 'Failed to register user' });
    }
  }
});

// Get user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const row = await dbGet('SELECT * FROM users WHERE user_id = ?', [id]);
    
    if (!row) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(row);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Update user
router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    
    await dbRun(
      'UPDATE users SET name = ?, email = ?, phone = ? WHERE user_id = ?',
      [name, email, phone, id]
    );
    
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await dbRun('DELETE FROM users WHERE user_id = ?', [id]);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Search users
router.get('/users/search/:term', async (req, res) => {
  try {
    const { term } = req.params;
    const rows = await dbAll(`
      SELECT 
        user_id as id,
        name,
        email,
        phone,
        registration_date as registrationDate
      FROM users
      WHERE name LIKE ? OR email LIKE ?
      ORDER BY registration_date DESC
    `, [`%${term}%`, `%${term}%`]);
    
    res.json(rows);
  } catch (error) {
    console.error('Error searching users:', error);
    res.status(500).json({ error: 'Failed to search users' });
  }
});

module.exports = router;
