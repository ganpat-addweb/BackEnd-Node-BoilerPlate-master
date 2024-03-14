const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

router.get('/users',UsersController.getUserList)
router.post('/users', UsersController.createUser);
router.get('/users/:id', UsersController.getUserById);
module.exports = router;
