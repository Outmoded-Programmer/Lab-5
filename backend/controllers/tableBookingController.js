const RservationModel = require("../models/tableBooking.js");

const postUser = async (req  , res) => {
  const { name, email, phone, noOfPeople, noOfTable, date, createdAt } =
    req.body
    const reserve = new Reservation({
        name, email, phone, noOfPeople, noOfTable, date, createdAt
    })
    try {
        const saveReserve = await reserve.save();
        res.status(200).json({success: true , message : "User data Saved Successfully" , body: saveReserve});
    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message);
    };
};

//Get Method 

const getUser = async (req  , res)=>{
    try{
        const Reserve = Reservation.find();
        res.status(200).json({success: true , body: Reserve})
    }catch(error){
        console.log(error.message);
        res.status(500).json({success:false , message:"Internal Server error"})
    }
}


module.exports = {postUser , getUser}