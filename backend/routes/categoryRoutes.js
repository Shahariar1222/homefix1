const express = require('express');
const router = express.Router();
const { manageCategory } = require('../controller/appController');
const { verifyAdmin } = require('../middleware/auth');

router.route('/')
  .get(manageCategory)
  .post(verifyAdmin, manageCategory);

module.exports = router;