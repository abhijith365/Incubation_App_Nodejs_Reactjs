import express from 'express'
import { getUser, userHome } from '../controllers/user/User.js'

const route = express.Router()


route.get('/', getUser)
route.get('/home', userHome)

export default route;