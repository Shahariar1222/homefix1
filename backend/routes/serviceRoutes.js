const express = require('express');

const router = express.Router();

const {
  createService,
  getServices,
  updateService,
  deleteService
} = require('../controller/appController');

const { verifyToken } = require('../middleware/auth');


// Get all services
router.get('/', getServices);


// Add new service
router.post('/', verifyToken, createService);


// Edit service
router.put('/:id', verifyToken, updateService);


// Delete service
router.delete('/:id', verifyToken, deleteService);


module.exports = router;