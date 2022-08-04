import mongoose from "mongoose";

export const connect = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)

    } catch (error) {
        console.log(error)
    }

    mongoose.connection.on('connected', () => { console.log(`MongoDb connected`) })
    mongoose.connection.on('disconnected', () => { console.log(`MongoDb disconnected`) })

}