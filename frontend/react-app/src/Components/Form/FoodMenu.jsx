import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'http://localhost:5000/api/v1/food/getFood'

const FoodMenu = () => {
  const [getApi, setGetApi] = useState([]);

  const getData = async () => {
    try {
      const res = await Axios.get(url);
      setGetApi(res.data);
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    getData()
  } , [])
  // useEffect(() => {
  //   const FetchData = async () => {
  //     try {
  //       const response = await fetch(url)
  //       const res = await response.json()
  //       setGetApi(res)
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   FetchData();
  // }, [])
  console.log(getApi)

  return (
    <>
      <h1>Food</h1>
      <div className="d-flex">
        {getApi.map((food, id) => {
          return (
            <>
              <div className="card-item text-center d-flex flex-column  border w-25 align-center" key={id} >
                <h2>{food.name}</h2>
                <img src={food.image} alt="" style={{ maxWidth: '200px', maxHeight: '150px' }} />
                <p>{food.price}</p>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default FoodMenu

