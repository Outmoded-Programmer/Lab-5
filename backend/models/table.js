const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  noOfTables:{
    type: Number , 
    require: true ,
  }
})
module.exports = mongoose.model('Table' , tableSchema) ;