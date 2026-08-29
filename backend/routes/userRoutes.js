const express = require('express');
const router = express.Router();
const { register, login, getUsersByRole } = require('../controller/appController');
const { verifyAdmin } = require('../middleware/auth');

// Auth Routes
router.post('/register', register);
router.post('/login', login);

// Admin Customer/Provider Management
router.get('/role/:role', verifyAdmin, getUsersByRole);

module.exports = router;