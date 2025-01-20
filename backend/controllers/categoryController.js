const Category = require('../models/categoryModel.js');
const Food = require('../models/foodModel.js');

//enter the category 
const addCategory = async (req , res )=>{
    const {name , food } = req.body ;
    const category = new Category({name , food});
    try{
        const saveCategory = await category.save();
        res.status(201).json({success: true , data: saveCategory});
    }catch(error){
        console.log(error);
        res.status(500).json({sucess:false , message : "internal server error"})
    }
}

const getCategory = async (req , res)=>{
    try{
       const category = await Category.find().populate("food");
       res.status(200).json({success:true , data: category})

    }catch(error){
        console.log(error);
        res.status(500).json({success:false , message: error.message})
    }
}

//update category

const updateCategory = async (req , res )=>{
    const {id} = req.params ;
    const{name , foods} = req.body;
    try{
    const updateCategory = await Category.findByIdAndUpdate(id , {name  , foods} , {new :true}) ;
        if(!updateCategory){
            res.status(404).json({success:false  , message: "Category  not found"});
        }
        res.status(200).json({success:true , message: "Category updated successfully!" , data: updateCategory})
    }catch(error){
        console.log(error);
        res.status(500).json({success:false , message:  "internal server error!"})
    }
}

//delete category
const deleteCategory = async (req ,res )=>{
    const {id} = req.params; 
    try{
        const category = await Category.findByIdAndDelete(id);
        if(!category){
            res.status(404).json({success:false  ,  message: "Category not found!"});
        };
        res.status(200).json({success: true , data: category , message:"Category deleted succssfully!"})
    }catch(error){
        console.log(error);
        res.status(500).json({success:false , message: "internal server error"})
    }
}
module.exports ={ addCategory , getCategory , updateCategory , deleteCategory};