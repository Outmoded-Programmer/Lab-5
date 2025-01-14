import React, { useEffect, useState } from 'react' ;

const url = "http://localhost:3000/api/v1/food/getFood"

// const FoodForm = () => {
//   const [foodItem , setFood ] = useState({
//     name : "" ,
//     image: " ",
//     price : " "
//   })
//   const handleFood = async ()=>{
//     try {
//       const {success , message } =  await 
//     } catch (error) {
      
//     }
//   }
const [getApi , setGetApi ] = useState([]);

const fetchApi = async ()=>{
 const fetchData = await fetch(url) 
 const data = await fetchData
 console.log("data = " , data)
}

useEffect(()=>{
  fetchApi()
} , [])
  return (
    <>
    <form>
      <label>Enter the food name</label>
      <input type="text" />
    </form>
    </>
  )
}

export default FoodForm