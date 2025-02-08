import React, { useEffect, useState } from "react";
import "./body.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const url = "http://localhost:5000/api/v1/category/getCategory";
const CategoryCar = () => {
  const [setApi, getSetApi] = useState([]);
  const resApi = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data.data;
      console.log(data);
      getSetApi(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(setApi);
  useEffect(() => {
    resApi();
  }, []);

  return (
    <>
      <div className="category container top-100 w-100">
        <div className="category-card text-center">
          <h2 className="pt-5 cart-title">Category</h2>
          <div className="row justify-content-center g-4 ms-5 ps-5">
            {setApi.map((category, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
                key={index}
              >
                <div className="cart-card">
                  <img
                    src={category.image}
                    className="card-image"
                    alt=""
                    width="100%"
                  />
                  <h2 className="card-title-2">{category.name}</h2>
                  <a href="/FoodMenu" className="cat-btn">
                    Show Category
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCar;
