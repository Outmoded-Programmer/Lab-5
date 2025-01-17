import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const url = 'http://localhost:5000/api/v1/food/getFood'

const FoodForm = () => {
  const [getApi , setGetApi] = useState([]) ;

  const getData = async()=>{ 
    try{
      const res = await Axios.get(url);
      const resData = await JSON.stringify(res); 
      setGetApi(resData);
    } catch(error){
      console.log(error.message)
    }
    }

  useEffect(()=>{
    getData();
  }, [getApi])

  return (
    <div>
      <h1>Food{getApi}</h1></div>
  )
}

export default FoodForm