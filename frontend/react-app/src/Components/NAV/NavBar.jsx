import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
     <div className="container">
        <div className="title">
            <h2>Hello i cant do anything right</h2>
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