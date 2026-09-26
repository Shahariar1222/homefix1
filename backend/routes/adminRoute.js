const express = require("express");

const router = express.Router();

const { getAdminDashboard } = require("../controller/appController");

const { verifyAdmin } = require("../middleware/auth");


// Admin Dashboard
router.get("/dashboard", verifyAdmin, getAdminDashboard);


module.exports = router;