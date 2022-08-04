const Formvalidate = (value) => {
    const error = {}
    //for email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //for phone number
    const regexPhone = /^\d{10}$/i
    // checking is image 
    const regexImg = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i



    // name validator
    if (!value.name) {
        error.name = "name is required"
    } else if (value.name.length < 5) {
        error.name = "name must be more than 4 characters"
    } else if (value.name.length > 11) {
        error.name = "name must be with in 10 characters"
    }

    // address validator
    if (!value.address) {
        error.address = "address is required"
    } else if (value.address.length < 10) {
        error.address = "address must be more than 10 characters"
    } else if (value.address.length > 25) {
        error.address = "address must be with in 25 characters"
    }

    // city validator
    if (!value.city) {
        error.city = "city is required"
    } else if (value.city.length < 3) {
        error.city = "city must be more than 10 characters"
    } else if (value.city.length > 15) {
        error.city = "city must be with in 15 characters"
    }

    // state validator
    if (!value.state) {
        error.state = "state is required"
    } else if (value.state.length < 3) {
        error.state = "state must be more than 10 characters"
    } else if (value.state.length > 15) {
        error.state = "state must be with in 15 characters"
    }

    //email validator
    if (!value.email) {
        error.email = "email is required"
    } else if (!regex.test(value.email)) {
        error.email = "Invalide email format"

    }

    //phone validator
    if (!value.phone) {
        error.phone = "phone no is required"
    } else if (value.phone.length > 11) {
        error.phone = "phone must be 10 numbers"
    }
    else if (!regexPhone.test(value.phone)) {
        error.phone = "Invalide phone no format"
    }

    // companyName validator
    if (!value.companyName) {
        error.companyName = "company Name is required"
    } else if (value.companyName.length < 2) {
        error.companyName = "company Name must be more than 3 characters"
    } else if (value.companyName.length > 15) {
        error.companyName = "Company Name must be with in 15 characters"
    }

    // companyLogo validator
    if (!value.companyLogo) {
        error.companyLogo = "companyLogo is required"
    } else if (!regexImg.test(value.companyLogo)) {
        error.companyName = "Company Logo must be Image"
    }

    // Team Background validator
    if (!value.teamBackground) {
        error.teamBackground = "Team Background is required"
    } else if (value.teamBackground.length < 10) {
        error.teamBackground = "Team Background must be more than 10 characters"
    } else if (value.teamBackground.length > 100) {
        error.teamBackground = "Team Background must be with in 100 characters"
    }

    // companyAndProduct validator
    if (!value.companyAndProduct) {
        error.companyAndProduct = "This Field is required"
    } else if (value.companyAndProduct.length < 2) {
        error.companyAndProduct = "This Field must be more than 3 characters"
    } else if (value.companyAndProduct.length > 15) {
        error.companyAndProduct = "This Field must be with in 15 characters"
    }

    // problemTryToSolve validator
    if (!value.problemTryToSolve) {
        error.problemTryToSolve = "This Field is required"
    } else if (value.problemTryToSolve.length < 2) {
        error.problemTryToSolve = "This Field must be more than 3 characters"
    } else if (value.problemTryToSolve.length > 15) {
        error.problemTryToSolve = "This Field must be with in 15 characters"
    }

    // uniqueSolution validator
    if (!value.uniqueSolution) {
        error.uniqueSolution = "This Field is required"
    } else if (value.uniqueSolution.length < 2) {
        error.uniqueSolution = "This Field must be more than 3 characters"
    } else if (value.uniqueSolution.length > 15) {
        error.uniqueSolution = "This Field must be with in 15 characters"
    }

    // propositionOfCust validator
    if (!value.propositionOfCust) {
        error.propositionOfCust = "This Field is required"
    } else if (value.propositionOfCust.length < 2) {
        error.propositionOfCust = "This Field must be more than 3 characters"
    } else if (value.propositionOfCust.length > 15) {
        error.propositionOfCust = "This Field must be with in 15 characters"
    }

    // competAndAdvCompet validator
    if (!value.competAndAdvCompet) {
        error.competAndAdvCompet = "This Field is required"
    } else if (value.competAndAdvCompet.length < 2) {
        error.competAndAdvCompet = "This Field must be more than 3 characters"
    } else if (value.competAndAdvCompet.length > 15) {
        error.competAndAdvCompet = "This Field must be with in 15 characters"
    }

    // revModel validator
    if (!value.revModel) {
        error.revModel = "This Field is required"
    } else if (value.revModel.length < 2) {
        error.revModel = "This Field must be more than 3 characters"
    } else if (value.revModel.length > 15) {
        error.revModel = "This Field must be with in 15 characters"
    }

    // potentialMarketSizeOfPro validator
    if (!value.potentialMarketSizeOfPro) {
        error.potentialMarketSizeOfPro = "This Field is required"
    } else if (value.potentialMarketSizeOfPro.length < 2) {
        error.potentialMarketSizeOfPro = "This Field must be more than 3 characters"
    } else if (value.potentialMarketSizeOfPro.length > 15) {
        error.potentialMarketSizeOfPro = "This Field must be with in 15 characters"
    }

    // typeOfIncu validator
    if (!value.typeOfIncu) {
        error.typeOfIncu = true
    }

    // businessProposal validator
    if (!value.businessProposal) {
        error.businessProposal = "This Field is required"
    } else if (value.businessProposal.length < 3) {
        error.businessProposal = "This Field must be more than 3 characters"
    } else if (value.businessProposal.length > 15) {
        error.businessProposal = "This Field must be with in 15 characters"
    }

    // planMarketProdAndServ validator
    if (!value.planMarketProdAndServ) {
        error.planMarketProdAndServ = "This Field is required"
    } else if (value.planMarketProdAndServ.length < 3) {
        error.planMarketProdAndServ = "This Field must be more than 3 characters"
    } else if (value.planMarketProdAndServ.length > 15) {
        error.planMarketProdAndServ = "This Field must be with in 15 characters"
    }


    //returning error object 
    return error
}

export default Formvalidate;