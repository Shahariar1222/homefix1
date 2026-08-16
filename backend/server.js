const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Dummy User API for Demo
app.get('/api/users', (req, res) => {
  res.json([
    { _id: '1', name: 'Rahim Ahmed', email: 'rahim@gmail.com', role: 'customer' },
    { _id: '2', name: 'Karim Electrician', email: 'karim@gmail.com', role: 'provider' },
    { _id: '3', name: 'Admin User', email: 'admin@homefix.com', role: 'admin' }
  ]);
});

app.listen(5000, () => console.log('Server running on port 5000'));