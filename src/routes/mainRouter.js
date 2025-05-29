const express = require('express');
const router = express.Router();

const lookupRoutes = require('./lookupRoutes');
const userRoutes = require('./userRoutes');
const departmentRoutes = require('./departmentRoutes');

// Add sub-routers
router.use(lookupRoutes);
router.use(userRoutes);
router.use(departmentRoutes);

module.exports = router;
