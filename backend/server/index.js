const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")

//middlewear

app.use(cors());
app.use(express.json());


//Routes//
// Create a new user
app.post('/users', async (req, res) => {
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
app.get('/users', async (req, res) => {
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
app.get('/users/:user_id', async (req, res) => {
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

app.listen(5000, () =>{

    console.log("Server has started on port 5000")
});