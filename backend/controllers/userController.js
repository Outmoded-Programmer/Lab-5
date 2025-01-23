const User = require("../models/userModel")

const getUser = async(req , res)=>{
    try {
        const user = await User.findById(req.user.Id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)     
    }
}

const postUser = async(req , res)=>{
    const {userName ,  email , password , role} = await req.body
    try{
        const user = 
    }
}



module.exports = {getUser}