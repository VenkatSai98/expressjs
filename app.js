// app.js
const express = require('express');
const app = express();

// Route to get user data
app.get('/api/user', (req, res) => {
  // Simulated user data
  const user = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com'
  };
  
  // Sending user data as JSON response
  res.json(user);
});

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = server;
