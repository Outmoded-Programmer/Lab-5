import React, { useState } from "react";
import "./FoodPost.css";
import { ToastContainer, toast } from "react-toastify";

const url = "http://localhost:5000/api/v1/food/addFood";
const FoodPost = () => {
  const [foodItem, setFoodItem] = useState({
    name: "",
    price: "",
    image: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFoodItem((prevItems) => ({
      ...prevItems,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!foodItem.name || !foodItem.price || !foodItem.image) {
      toast.error("All fields needs to be filled");
      return;
    }
    const data = {
      name: foodItem.name,
      price: foodItem.price,
      image: foodItem.image,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Form could not be submitted", response.status);
      }
      const result = await response.json();
      console.log("Data submitted", result);
      toast.success("Data submitted successfully");
    } catch (error) {
      console.log("failed to submit", error.message);
      toast.error("failed to submit");
    }
    console.log(foodItem);
    setFoodItem({
      name: "",
      price: "",
      image: "",
    });
  };
  return (
    <>
      <div className="post-food">
        <div className="data-entry">
          <h2 className="foodPost-heading">Enter Food details</h2>
          <form className="form-data" action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Food's Name"
              onChange={handleChange}
              value={foodItem.name}
            />
            <input
              type="text"
              name="image"
              id=""
              placeholder="Image-url"
              onChange={handleChange}
              value={foodItem.image}
            />
            <input
              type="text"
              name="price"
              id=""
              placeholder="Price"
              onChange={handleChange}
              value={foodItem.price}
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
          <ToastContainer />
        </div>
        <div className="side-preview">
          <h2 className="foodPost-heading">Food Preview</h2>
          <div className="card">
            <div className="image-preview">
              {foodItem.image ? (
                <img src={foodItem.image} alt="food-image" />
              ) : (
                "image url"
              )}
            </div>
            <div className="name-preview">
              {foodItem.name ? (
                <h2 className="food-name">{foodItem.name}</h2>
              ) : (
                "food name"
              )}
            </div>
            <div className="price-preview">
              {foodItem.price ? (
                <h3 className="food-price">{foodItem.price}</h3>
              ) : (
                `Price Rs:${foodItem.price}`
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodPost;
