import express from 'express'
import { createUser, formSubmit, loginUser, userData } from '../controllers/user/Auth.js'
import { formsData, getUser, updateFormData, userHome } from '../controllers/user/User.js'
import { Adminprotect } from '../middlewares/adminAuthMiddle.js'
import { protect } from '../middlewares/authMiddleware.js'


const route = express.Router()


route.get('/', getUser)
route.get('/home', userHome)
route.post('/', createUser)
route.post('/user', loginUser)
route.get('/user', protect, userData)
route.post('/formSubmit', protect, formSubmit)
route.get('/forms', Adminprotect, formsData)
route.post('/updateViewForm', Adminprotect, updateFormData)

export default route;