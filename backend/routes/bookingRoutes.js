const express = require('express');
const router = express.Router();
const { createBooking, getBookings } = require('../controller/appController');
const { verifyToken } = require('../middleware/auth');

router.route('/')
  .get(verifyToken, getBookings)
  .post(verifyToken, createBooking);

module.exports = router;