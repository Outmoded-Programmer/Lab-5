const mongoose = require('mongoose');
const { isStrongPassword } = require('validator');

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique: true,
        require:true
    },
    password:{
        type: String,
        require:true,
        validate: function(value){
           return isStrongPassword(value);
        },
        message:"Password is not strong enough", 
    },
    role:{
        type: String,
        enum:['admin' , 'user'] ,
        default: 'user' ,
    }
})

module.exports = mongoose.model('User' , userSchema)