const express = require('express');
const router = express.Router();
const { manageReviews } = require('../controller/appController');
const { verifyToken } = require('../middleware/auth');

router.route('/')
  .get(verifyToken, manageReviews)
  .post(verifyToken, manageReviews);

module.exports = router;