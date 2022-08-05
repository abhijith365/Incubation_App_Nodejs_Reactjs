import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import morgan from "morgan";
import { connect } from './config/db.js';
import UserRoute from './routes/UserRoute.js'
import AuthRouter from './routes/AuthRouter.js'
import AdminRouter from './routes/AdminRoute.js'
import cookieParser from "cookie-parser"

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
dotenv.config()
app.use(morgan('dev'))
app.use(cookieParser())

// mongodb connection
connect()

// routes
app.use('/api/user', UserRoute)
app.use('/api/auth', AuthRouter)
app.use('/admin', AdminRouter)


//ROUTER ERROR HANDLER MIDDLEWARE
app.use((err, req, res, next) => {

    const errorStatus = err.status || 500
    const errorMeg = err.message || "Something went wrong"

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMeg,
        stack: err.stack,
    })
})


// running server config
const PORT = process.env.SERVER_PORT || 8888

app.listen(PORT, () => { console.log(`server running on ${PORT}`) })