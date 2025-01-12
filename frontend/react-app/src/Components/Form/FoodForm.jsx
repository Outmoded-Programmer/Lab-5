import React, { useEffect, useState } from 'react' ;

const url = "http://localhost:3000/api/v1/food/getFood"

const FoodForm = () => {
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
    </>
  )
}

export default FoodForm