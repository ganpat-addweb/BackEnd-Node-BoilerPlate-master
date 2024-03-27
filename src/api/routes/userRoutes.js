import express from 'express';
const router = express.Router();
import {User,getUserList,getUserById,createUser} from '../controllers/UsersController.js';

router.get('/users', getUserList);
router.post('/users', createUser);
router.get('/users/:id', getUserById);

export default router;
