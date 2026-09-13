const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
  User,
  Category,
  Booking,
  Review,
  Service
} = require('../models/allModels');


// ========================================
// AUTHENTICATION
// ========================================

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({
      message: 'User registered successfully',
      userId: user._id
    });

  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};


// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        message: 'Invalid credentials'
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET || 'secretkey123',
      {
        expiresIn: '1d'
      }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};


// ========================================
// ADMIN & MANAGEMENT
// ========================================

// Get users by role
exports.getUsersByRole = async (req, res) => {
  try {
    const users = await User
      .find({ role: req.params.role })
      .select('-password');

    res.json(users);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};


// Manage Category
exports.manageCategory = async (req, res) => {
  try {

    if (req.method === 'POST') {

      const category = await Category.create(req.body);

      return res.status(201).json(category);
    }

    const categories = await Category.find();

    res.json(categories);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};


// ========================================
// BOOKINGS
// ========================================

// Create Booking
exports.createBooking = async (req, res) => {
  try {

    const booking = await Booking.create({
      ...req.body,
      customer: req.user.id
    });

    res.status(201).json(booking);

  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};


// Get Bookings
exports.getBookings = async (req, res) => {
  try {

    const bookings = await Booking
      .find()
      .populate('customer provider category', 'name email');

    res.json(bookings);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};


// ========================================
// REVIEWS
// ========================================

// Manage Reviews
exports.manageReviews = async (req, res) => {
  try {

    if (req.method === 'POST') {

      const review = await Review.create({
        ...req.body,
        customer: req.user.id
      });

      return res.status(201).json(review);
    }

    const reviews = await Review
      .find()
      .populate('customer provider', 'name');

    res.json(reviews);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};


// ========================================
// SERVICES
// ========================================

// Create Service
exports.createService = async (req, res) => {
  try {

    const {
      name,
      category,
      price,
      description,
      location
    } = req.body;

    
    const categoryData = await Category.findOne({
      name: {
        $regex: new RegExp(`^${category}$`, 'i')
      }
    });

    
    if (!categoryData) {
      return res.status(404).json({
        message: 'Category not found'
      });
    }

    const service = await Service.create({
      provider: req.user.id,
      category: categoryData._id,
      name,
      description,
      price,
      location
    });

    res.status(201).json({
      message: 'Service created successfully',
      service
    });

  } catch (err) {

    res.status(400).json({
      error: err.message
    });

  }
};


// Get All Services
exports.getServices = async (req, res) => {
  try {

    const services = await Service
      .find()
      .populate('provider category', 'name email');

    res.json(services);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};


// Update Service
exports.updateService = async (req, res) => {
  try {

    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        message: 'Service not found'
      });
    }

    if (service.provider.toString() !== req.user.id) {
      return res.status(403).json({
        message: 'You can only update your own service'
      });
    }

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.json({
      message: 'Service updated successfully',
      service: updatedService
    });

  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};


// Delete Service
exports.deleteService = async (req, res) => {
  try {

    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        message: 'Service not found'
      });
    }

    if (service.provider.toString() !== req.user.id) {
      return res.status(403).json({
        message: 'You can only delete your own service'
      });
    }

    await Service.findByIdAndDelete(req.params.id);

    res.json({
      message: 'Service deleted successfully'
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};