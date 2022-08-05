import User from '../../models/User.js'
import UserForm from '../../models/UserForm.js'


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

export const formsData = async (req, res, next) => {
    try {
        const data = await UserForm.find()
        res.status(200).json(data)
    } catch (e) {
        next(e)
    }
}

export const updateFormData = async (req, res, next) => {
    try {
        const id = req.body.id
        const name = req.body.placeholder
        console.log(id, name)
        let obj = {};
        if (name === 'adminView') {
            obj = { adminView: true }
        } else {
            obj = { [name]: true, adminView: false }

        }
        console.log(obj, "objjjj")
        let data = await UserForm.findByIdAndUpdate(id, { $set: obj }, { new: true })

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
}