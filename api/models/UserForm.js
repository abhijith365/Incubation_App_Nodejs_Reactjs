import mongoose from "mongoose";

const UserFormSchema = new mongoose.Schema({
    userId: {
        type: "string",
        required: true
    },
    name: {
        type: "string",
        required: true
    },
    address: {
        type: "string",
        required: true
    },
    city: {
        type: "string",
        required: true
    },
    state: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true
    },
    phoneNumber: {
        type: "string",
        required: true
    },
    companyName: {
        type: "string",
        required: true
    },
    companyLogo: {
        type: "string",
        required: true
    },
    teamBackground: {
        type: "string",
        required: true
    },
    companyAndProduct: {
        type: "string",
        required: true
    },
    problemTryToSolve: {
        type: "string",
        required: true
    },
    uniqueSolution: {
        type: "string",
        required: true
    },
    propositionOfCust: {
        type: "string",
        required: true
    },
    competAndAdvCompet: {
        type: "string",
        required: true
    },
    revModel: {
        type: "string",
        required: true
    },
    potentialMarketSizeOfPro: {
        type: "string",
        required: true
    },
    planMarketProdAndServ: {
        type: "string",
        required: true
    },
    typeOfIncu: {
        type: "string",
        required: true
    },
    businessProposal: {
        type: "string",
        required: true
    },

}, { timestamps: true })

export default mongoose.model('UserForm', UserFormSchema)