import express from 'express'
import { createUser, formSubmit, loginUser, userData } from '../controllers/user/Auth.js';
import { protect } from '../middlewares/authMiddleware.js';

const route = express.Router()

// creating user
route.post('/', createUser)

// login user
route.post('/user', loginUser)

route.get('/user', protect, userData)

route.post('/formSubmit', protect, formSubmit)

export default route;