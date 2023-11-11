const express = require('express');
const router = express.Router()
const cors = require('cors'); // Add this line

const pool = require('../db');


router.use(express.json());

router.use(cors()); // Use CORS middleware

// Create a new user
router.post('/users', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      const result = await pool.query(
        'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
        [username, email, password]
      );
  
      const newUser = result.rows[0];
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Get all users
  router.get('/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      const users = result.rows;
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Get a specific user by user_id
  router.get('/users/:user_id', async (req, res) => {
    const { user_id } = req.params;
  
    try {
      const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
  
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        const user = result.rows[0];
        res.status(200).json(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Update a user's information
  router.put('/users/:user_id', async (req, res) => {
    const { user_id } = req.params;
    const { username, email, password } = req.body;
  
    try {
      const result = await pool.query(
        'UPDATE users SET username = $1, email = $2, password_hash = $3 WHERE user_id = $4 RETURNING *',
        [username, email, password, user_id]
      );
  
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        const updatedUser = result.rows[0];
        res.status(200).json(updatedUser);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Delete a user by user_id
  router.delete('/users/:user_id', async (req, res) => {
    const { user_id } = req.params;
  
    try {
      const result = await pool.query('DELETE FROM users WHERE user_id = $1 RETURNING *', [user_id]);
  
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        const deletedUser = result.rows[0];
        res.status(200).json(deletedUser);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;

  
  


  module.exports = router;