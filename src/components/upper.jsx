import React from 'react'
import waving from "../icons/waving-hand.png";


const Upper = () => {
  return (
    <>
    <div className="uppermain">
        <div className="leftupper">
            <p>Hello Shahrukh</p>
            <img src={waving} alt="" width="15px"/>
        </div>
        <div className="rightuppe">
            <div className="searchmain">
            <i className="fa-solid fa-magnifying-glass"></i>
                <input className="searchinput" type="text" placeholder='search'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Upper