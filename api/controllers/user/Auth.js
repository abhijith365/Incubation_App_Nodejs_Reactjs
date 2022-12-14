import User from "../../models/User.js"
import UserForm from '../../models/UserForm.js'
import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'

//create user 
export const createUser = asyncHandler(async (req, res) => {
    //destucturing all data from request body
    const { name, email, password } = req.body

    //checking any data is empty
    if (!name || !email || !password) {
        res.json({
            status: 400,
            "message": "Entere all fields",
            data: false
        })

    }

    // chcking is user exit or not
    const exitestUser = await User.findOne({ email })

    if (exitestUser) {
        res.json({
            status: 400,
            "message": "User alreday exits",
            data: false
        })
    }

    // HASHING PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        password: hashPass,
        email
    })

    //checking user created
    if (user) {
        res.json({
            status: 200,
            message: "Success",
            data: [{
                id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            }]
        })
    } else {
        res.json({
            status: 400,
            "message": "Invalid data input",
            data: false
        })
    }
})

//for validate  user {public}
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            status: 201,
            message: 'good',
            data: [{
                id: user._id,
                name: user.name,
                email: user.email,
                status: user.status,
                token: generateToken(user._id)
            }]
        })
    } else {
        res.json({
            status: 400,
            "message": "Invalid credential",
            data: false
        })
    }

})
//for get user data {private}
export const userData = asyncHandler(async (req, res) => {
    // const { _id, name, email } = req.user;
    res.json({ data: req.user })
})

export const formSubmit = asyncHandler(async (req, res, next) => {
    try {
        const data = { ...req.body, userId: req.user.id }
        const newForm = new UserForm(data)
        const updateUser = await User.findByIdAndUpdate(req.user.id, { $set: { formStatus: true } }, { new: true })
        await newForm.save()
        console.log(newForm, updateUser)
        res.status(200).json({ message: "Success", data: true })

    } catch (error) {
        next(error)
    }
})

//generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}