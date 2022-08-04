import User from '../../models/User.js'


//single user detail
export const getUser = async (req, res) => {
    const user = await User.find()
    res.status(200).json(user)
}

// user home page
export const userHome = async (req, res) => {
    try {

    } catch (e) {
        console.log(e)
    }
}