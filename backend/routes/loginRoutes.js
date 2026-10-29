const express = require('express');
const { dbRun, dbGet, dbAll } = require('../db');

const router = express.Router();

// Get all login records
router.get('/login-records', async (req, res) => {
  try {
    const rows = await dbAll(`
      SELECT 
        login_id as id,
        username,
        login_time as loginTime,
        status
      FROM login_records
      ORDER BY login_time DESC
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching login records:', error);
    res.status(500).json({ error: 'Failed to fetch login records' });
  }
});

// Add login record
router.post('/login-records', async (req, res) => {
  try {
    const { username, status } = req.body;
    const result = await dbRun(
      'INSERT INTO login_records (username, status) VALUES (?, ?)',
      [username, status]
    );
    
    res.status(201).json({ id: result.id, username, status });
  } catch (error) {
    console.error('Error adding login record:', error);
    res.status(500).json({ error: 'Failed to add login record' });
  }
});

// Search login records
router.get('/login-records/search/:term', async (req, res) => {
  try {
    const { term } = req.params;
    const rows = await dbAll(`
      SELECT 
        login_id as id,
        username,
        login_time as loginTime,
        status
      FROM login_records
      WHERE username LIKE ?
      ORDER BY login_time DESC
    `, [`%${term}%`]);
    
    res.json(rows);
  } catch (error) {
    console.error('Error searching login records:', error);
    res.status(500).json({ error: 'Failed to search login records' });
  }
});

module.exports = router;
