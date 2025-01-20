import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { MdOutlineAccountCircle } from "react-icons/md";

const NavBar = () => {
  return (
    <>
      <div className="h-5 p-5 d-flex main-nav">
        <div className="title">
          <h2 className="text-white">Title</h2>
        </div>
        <nav className="navbar">
          <Link to="/" className="p-2 text-white text-decoration-none link">
            Home
          </Link>
          <Link
            to="/foodMenu"
            className="p-2 text-white text-decoration-none link"
          >
            Menu
          </Link>
          <Link
            to="/Category"
            className="p-2 text-white text-decoration-none link"
          >
            Category
          </Link>
          <Link
            to="/addFood"
            className="p-2 text-white text-decoration-none link"
          >
            Food Menu
          </Link>
        </nav>
        <MdOutlineAccountCircle className="text-white login" />
      </div>
    </>
  );
};

export default NavBar;
