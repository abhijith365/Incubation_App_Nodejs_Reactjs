import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/User.js'



export const protect = asyncHandler(async (req, res, next) => {
    let token
    //chcking is token is bearer token and containg Bearer 
    let BearerToken = req.headers.authorization.split(' ')[0] === 'Bearer';

    if (req.headers.authorization && BearerToken) {
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1]

            // verfi token
            const encode = jwt.verify(token, process.env.JWT_SECRET)

            //assigning to the user object
            console.log(encode)
            req.user = await User.findById(encode.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.json({ status: 401, "message": "Not autherized" })


        }
    } else {
        res.json({ status: 400, "message": "No autherized, no token" })
    }

})

