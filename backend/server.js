require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Import routes (to be created)
// const authRoutes = require('./routes/auth');
// const climbSiteRoutes = require('./routes/climbSites');
// const routeRoutes = require('./routes/routes');
// const userRoutes = require('./routes/users');

// Define port
const PORT = process.env.PORT || 5000;

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Climbing Ace API' });
});

// Use routes
// app.use('/api/auth', authRoutes);
// app.use('/api/climb-sites', climbSiteRoutes);
// app.use('/api/routes', routeRoutes);
// app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: err.message || 'Something went wrong on the server',
    error: process.env.NODE_ENV === 'production' ? null : err
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 