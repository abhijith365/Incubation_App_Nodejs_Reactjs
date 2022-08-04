import express from 'express'
import { createUser, loginUser } from '../controllers/user/Auth.js';

const route = express.Router()

// creating user
route.post('/', createUser)

// login user
route.post('/user', loginUser)

export default route;