const mongoose = require('mongoose') ;

const foodSchema = new mongoose.Schema({
    name: {
        type: String ,
        require:true
    },
    image:{
        type:String ,
        require: true ,
    },
    price : {
        type: String ,
        require: true ,
    },
}) ;

module.exports = mongoose.model('Food' , foodSchema);