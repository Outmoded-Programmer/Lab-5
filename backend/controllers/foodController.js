const Food = require('../models/foodModel.js');
const Category = require('../models/categoryModel.js'); 



// Enter the food
const addFood = async (req  , res ) =>{
    const {name , image , price } = req.body;
    const food = new Food ({
        name , price , image
    })
    try{
       const saveFood = await food.save();
       res.status(201).json(saveFood)
    } catch (error){
        console.log(error);
        res.status(500).json({success: false , message : "Internal Server Error"})
    }
} ;
// Get food 
const getFood = async (req , res )=>{
    try{
        const food = await Food.find();
        res.status(200).json(food);
    }catch(error){
        console.log('Error: ' , error);
        res.status(500).json({success: false  , message:"internal server error"});
    }
}

// Update food 
const updateFood = async (req , res )=>{
    const { id } = req.params ;
    const {name , image  , price } = req.body;
    try{
        const updatefood = await Food.findByIdAndUpdate(
            id ,
            {name , image , price}, 
            {new : true },
        );
        if(!updatefood){
            return res.status(404).json({success:false , message: "Food not found!"})
        };
        res.status(200).json({success: true , data: updatefood });
    }catch(error){
        console.log("Error: " ,  error);
        res.status(500).json({success:false , message: error.message});
    }
}



// delete food 

const deletedFood = async (req , res)=>{
    const{id}= req.params;
    try{
        const food = await Food.findByIdAndDelete(id);
        if(!food){
            res.status(404).json({success:false , message: "Food not found!"});
        };
        res.status(200).json({success: true , message: "Food deleted successfully" , data: food});
    }catch(error){
        console.log("Error: " , error.message);
        res.status(500).json({success:false , message: error.message});
    }
}
module.exports = {addFood , getFood , updateFood , deletedFood};