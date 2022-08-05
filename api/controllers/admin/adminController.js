import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

export const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = { email: process.env.ADMIN_NAME, password: process.env.ADMIN_PASS }


    if (user.email == email && user.password == password) {
        res.status(200).json({
            status: 200,
            message: 'good',
            data: [{
                password: user.password,
                email: user.email,
                token: generateToken(user)
            }]
        })
    } else {
        res.status(400).json({
            status: 400,
            "message": "Invalid credential",
            data: false
        })
    }

})

export const adminData = asyncHandler(async (req, res) => {
    const { email, password } = req.user;
    res.json({ data: { email, password } })
})

//generate JWT
const generateToken = (obj) => {
    console.log(obj)
    let data = { email: obj.email, password: obj.password }
    return jwt.sign(obj, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}