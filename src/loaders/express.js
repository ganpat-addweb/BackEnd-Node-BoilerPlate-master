const userRoutes = require('../api/routes/userRoutes');
const express = require('express');
const cors = require('cors')
const checkUserRole = require('../api/middlewares/auth')
module.exports = async ({ app }) => {
  app.use(express.json())
  app.use(cors())
  app.get('/', (req, res) => {
    try {
      res.status(201).json({ message: 'welcome ' })
      // res.redirect('https://www.google.com')
    } catch (e) {
    }
  })
  app.use('/api', checkUserRole, userRoutes);
  // Additional middleware setup could go here
  return app;
};
