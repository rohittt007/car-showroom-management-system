const express = require('express');
const { dbRun, dbGet, dbAll } = require('../db');

const router = express.Router();

// Get all cars
router.get('/cars', async (req, res) => {
  try {
    const rows = await dbAll(`
      SELECT 
        car_id as id,
        car_name as carName,
        brand,
        model,
        price,
        availability,
        description,
        image_url as imageUrl,
        created_date as createdDate
      FROM cars
      ORDER BY created_date DESC
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
});

// Get car statistics
router.get('/cars/stats/summary', async (req, res) => {
  try {
    const result = await dbGet(`
      SELECT 
        COUNT(*) as totalCars,
        SUM(CASE WHEN availability = 'Available' THEN 1 ELSE 0 END) as availableCars,
        SUM(CASE WHEN availability = 'Booked' THEN 1 ELSE 0 END) as bookedCars,
        SUM(CASE WHEN availability = 'Sold' THEN 1 ELSE 0 END) as soldCars
      FROM cars
    `);
    res.json(result);
  } catch (error) {
    console.error('Error fetching car statistics:', error);
    res.status(500).json({ error: 'Failed to fetch car statistics' });
  }
});

// Add new car
router.post('/cars', async (req, res) => {
  try {
    const { carName, brand, model, price, availability, description, imageUrl } = req.body;
    
    if (!carName || !brand || !price) {
      return res.status(400).json({ error: 'Car name, brand, and price are required' });
    }

    const result = await dbRun(
      'INSERT INTO cars (car_name, brand, model, price, availability, description, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [carName, brand, model || null, price, availability || 'Available', description || null, imageUrl || null]
    );
    
    res.status(201).json({
      id: result.id,
      carName,
      brand,
      model,
      price,
      availability: availability || 'Available',
      description,
      imageUrl
    });
  } catch (error) {
    console.error('Error adding car:', error);
    res.status(500).json({ error: 'Failed to add car' });
  }
});

// Get car by ID
router.get('/cars/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const row = await dbGet('SELECT * FROM cars WHERE car_id = ?', [id]);
    
    if (!row) {
      return res.status(404).json({ error: 'Car not found' });
    }
    
    res.json(row);
  } catch (error) {
    console.error('Error fetching car:', error);
    res.status(500).json({ error: 'Failed to fetch car' });
  }
});

// Update car
router.put('/cars/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { carName, brand, model, price, availability, description, imageUrl } = req.body;
    
    await dbRun(
      'UPDATE cars SET car_name = ?, brand = ?, model = ?, price = ?, availability = ?, description = ?, image_url = ?, updated_date = CURRENT_TIMESTAMP WHERE car_id = ?',
      [carName, brand, model, price, availability, description, imageUrl, id]
    );
    
    res.json({ message: 'Car updated successfully' });
  } catch (error) {
    console.error('Error updating car:', error);
    res.status(500).json({ error: 'Failed to update car' });
  }
});

// Delete car
router.delete('/cars/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await dbRun('DELETE FROM cars WHERE car_id = ?', [id]);
    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    console.error('Error deleting car:', error);
    res.status(500).json({ error: 'Failed to delete car' });
  }
});

// Search cars
router.get('/search/cars/:term', async (req, res) => {
  try {
    const { term } = req.params;
    const rows = await dbAll(`
      SELECT 
        car_id as id,
        car_name as carName,
        brand,
        model,
        price,
        availability,
        description,
        image_url as imageUrl,
        created_date as createdDate
      FROM cars
      WHERE car_name LIKE ? OR brand LIKE ? OR model LIKE ?
      ORDER BY created_date DESC
    `, [`%${term}%`, `%${term}%`, `%${term}%`]);
    
    res.json(rows);
  } catch (error) {
    console.error('Error searching cars:', error);
    res.status(500).json({ error: 'Failed to search cars' });
  }
});

// Get cars by availability
router.get('/availability/:status', async (req, res) => {
  try {
    const { status } = req.params;
    const rows = await dbAll(
      'SELECT * FROM cars WHERE availability = ? ORDER BY created_date DESC',
      [status]
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching cars by availability:', error);
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
});

module.exports = router;
