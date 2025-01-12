const mongoose =  require('mongoose');

const totalBillSchema = new mongoose.Schema({
  items:[{
    foodId: {
      type: mongoose.Schema.Types.ObjectId,
      require:true,
    },
    name:{
      type: String ,
      require:true,
    },
    image:{
      type:String,
      require:true
    },
    quantity:{
      type:Number,
      require:true
    },
    price:{
      type:String ,
      require:true 
    },
    subTotal:{
      type: Number ,
      require:true
    }
  }],
  totalBill:{
    type:Number,
    require:true
  },
  createdAt:{
    type:Date,
    default: Date.now
  }
});
module.exports = mongoose.model('TotalBill' , totalBillSchema);