import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
     <div className="container">
        <div className="title">
        </div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/foodMenu">Food Menu</Link>
        <Link to="/addFood">Food Menu</Link>
        </nav>
     </div>
    </>
    )
}

export default NavBar