import React from 'react'
import "./body.css"
const Hero = () => {
  return (
    <>
    <div className='hero'>
        <div className="cards-main d-flex">
            <div className="card-1 card w-25 m-2">
                <h3>Hello</h3>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit.....</p>
                <button>Show</button>
            </div>
            <div className="card-2 card w-25 m-2">
                <h3>Hello</h3>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit.....</p>
                <button>Show</button>
            </div>
            <div className="card-3 card w-25 m-2">
                <h3>Hello</h3>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit.....</p>
                <button>Show</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero