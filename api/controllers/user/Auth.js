import User from "../../models/User.js"
import bcrypt from 'bcrypt'

//create user 
export const createUser = async (req, res, next) => {
    try {

        const { name, email, password } = req.body

        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password, salt)

        const newUser = new User({
            "name": name,
            "email": email,
            "password": hashPass
        })

        await newUser.save()

        res.status(200).json(newUser)

    } catch (error) {
        console.log(error)
        next(error)
    }

}

// user login
export const loginUser = async (req, res, next) => {

    try {
        const user = await User.findOne({ 'email': req.body.email })

        if (!user)
            return next({ status: 400, message: "user don't exit" })

        const isPassword = await bcrypt.compare(req.body.password, user.password)

        if (!isPassword)
            return next({ status: 400, message: "wrong password or email" })

        res.status(200).json(user)
    } catch (e) {
        next(e)
    }
}