const mongoose = require('mongoose') ;

const MAX_TABLE = 20 ;
const tableBookingSchema = new mongoose.Schema({
    name:{
        type: String ,
        require: true ,
    },
    email:{
        type : String ,
        unique: true ,
        require:true,
    },
    phone:{
        type:Number,
        require: true ,
        unique : true ,
        validates: function(v){
            /^\ d{11} /.test(v);
        }
    },
    noOfPeople:{
        type:Number ,
        require: true ,
    },
    noOfTable:{
        type:Number ,
        require:true ,
        validates:function(value){
            return value >= MAX_TABLE ;
        },
        message:(props)=>{`The ${value} entered cannot be more then ${MAX_TABLE}`}
    },
    date:{
    type : Date ,
    require: true,
    },
    createdAt:{
        type:Date ,
        default: Date.now
    },
});
module.exports = mongoose.model('Reservation' , tableBookingSchema);