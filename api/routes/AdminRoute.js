import express from 'express'
import { loginAdmin, adminData } from '../controllers/admin/adminController.js'
import { Adminprotect } from '../middlewares/adminAuthMiddle.js'
const route = express.Router()

route.post('/', loginAdmin)
route.get('/', Adminprotect, adminData)
route.get('/home', Adminprotect, (req, res) => { res.send("admin") })

export default route