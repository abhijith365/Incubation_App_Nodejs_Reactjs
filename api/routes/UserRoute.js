import express from 'express'
import { createUser, formSubmit, loginUser, userData } from '../controllers/user/Auth.js'
import { getUser, userHome } from '../controllers/user/User.js'
import { protect } from '../middlewares/authMiddleware.js'

const route = express.Router()


route.get('/', getUser)
route.get('/home', userHome)
route.post('/', createUser)
route.post('/user', loginUser)
route.get('/user', protect, userData)
route.post('/formSubmit', protect, formSubmit)

export default route;