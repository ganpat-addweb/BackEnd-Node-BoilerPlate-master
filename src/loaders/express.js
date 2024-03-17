const userRoutes = require('../api/routes/userRoutes');
const express = require('express');
const cors = require('cors')
const checkUserRole = require('../api/middlewares/auth')

module.exports = async ({ app }) => {
  app.use(express.json())
  app.use(cors())
  
  app.use('/api',checkUserRole, userRoutes);
  // Additional middleware setup could go here
  return app;
};
