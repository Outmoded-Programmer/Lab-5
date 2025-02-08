import React from 'react'
import "./body.css"
import "bootstrap/dist/css/bootstrap.min.css";
const Hero = () => {
  return (
    <>
    <div className='hero'>
        <div className="cards-main d-flex justify-content-center">
            <div className="cards">
                <h3>Quality</h3>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit.....</p>
            </div>
            <div className="cards">
                <h3>Pricing</h3>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit.....</p>
            </div>
            <div className="cards">
                <h3>Service</h3>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit.....</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero