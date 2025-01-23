const User = require("../models/userModel");
const Bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const postUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User all ready exits!!! " });
    }
    const hashedPassword = await Bcrypt.hash(password, 10);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "Sign Up Successfull!!!" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server Error" });
  }
};

const getUser = async(req , res)=>{
    try {
        const { email , password} = req.body
        const user = await User.findOne({ email});
        if(!user){
            return res.status(404).json({success:false , message: "User not found"});
        }
        const isPassword = await Bcrypt.compare(password , user.password)
        if(!isPassword){
            return res.status(418).json({success:false , message: "Wrong Password"})
        }
        const jwtToken = jwt.sign({email:user.email , _id: user._id},
            process.env.JWT_SECRET ,
            {expiresIn:"24h"}
        )
        return res.status(200).json({success:true , message: "login successfull" , jwtToken , email , user: user.userName})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false , message: "Internal server error"});   
    }
;}


module.exports = { postUser , getUser };
