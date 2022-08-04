import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 4,
        max: 10,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        min: 4,
        max: 10,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('User', UserSchema)