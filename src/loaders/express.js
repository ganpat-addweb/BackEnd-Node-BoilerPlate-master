import userRoutes from '../api/routes/userRoutes.js'
import express from 'express'
import cors from 'cors'
import checkUserRole from '../api/middlewares/auth.js'

const setup = async ({ app }) => {
  app.use(express.json())
  app.use(cors())

  app.get('/', (req, res) => {
    try {
      res.status(201).json({ message: 'welcome ' })
      // res.redirect('https://www.google.com');
    } catch (e) {
      // Consider logging the error or handling it as appropriate
    }
  })

  app.use('/api', checkUserRole, userRoutes)
  // Additional middleware setup could go here

  return app
}

export default setup
