const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Category, Booking, Review } = require('../models/allModels');

// --- AUTHENTICATION ---
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });
    res.status(201).json({ message: 'User registered successfully', userId: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secretkey123', { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- ADMIN & MANAGEMENT ---
exports.getUsersByRole = async (req, res) => {
  try {
    const users = await User.find({ role: req.params.role }).select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.manageCategory = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const category = await Category.create(req.body);
      return res.status(201).json(category);
    }
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- BOOKINGS & REVIEWS ---
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({ ...req.body, customer: req.user.id });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('customer provider category', 'name email');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.manageReviews = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const review = await Review.create({ ...req.body, customer: req.user.id });
      return res.status(201).json(review);
    }
    const reviews = await Review.find().populate('customer provider', 'name');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};