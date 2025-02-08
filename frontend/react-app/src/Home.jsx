import React from "react";
import Hero from "./Components/Body/Hero";
import CategoryCar from "./Components/Body/CategoryCar";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Components/Body/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryCar />
      <Products />
    </>
  );
};

export default Home;
