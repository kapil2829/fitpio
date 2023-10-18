import React from 'react'
import arrow from '../icons/right-arrow.png';
import product from '../icons/product.png';
import customer from '../icons/cusomers.png';
import income from '../icons/income.png';
import promote from '../icons/promotions.png';
import help from '../icons/information.png';
import man from '../icons/navbottomimg.jpg';
import down from '../icons/arrow-down-sign-to-navigate.png';
import dashboard2 from '../icons/dashboard1.jpeg';
import dashboard1 from '../icons/dashboard2.jpeg';






const Nevbar = () => {
  return (
    <>
    <div className="navContainer">
        <div className="upperConatiner">
        <h3><img src={dashboard1} alt=""  width="12px" style={{'marginTop' : "20px"}}/> Dashboard</h3>
        <div className="navElement firstnavElement">
            <div>
                <img src={dashboard2} alt="" />
                <p>Dashboard</p>
            </div>
            
        </div>
        <div className="navElement">
            <div>
                <img src={product} alt="" />
                <p>Product</p>
            </div>
            
            <img className="arrowkey" src={arrow} alt="" width="12px"/>
            
        </div>
        <div className="navElement">
            <div>
                <img src={customer} alt="" />
                <p>Customers</p>
            </div>
        
            
            <img className="arrowkey" src={arrow} alt="" width="12px"/>
        </div>
            
        <div className="navElement">
            <div>
                <img src={income} alt="" />
                <p>Income</p>
            </div>
           
            <img className="arrowkey" src={arrow} alt="" width="12px"/>
            
        </div>
        <div className="navElement">
            <div>
                <img src={promote} alt="" />
                <p>Promote</p>
            </div>
            
            <img className="arrowkey" src={arrow} alt="" width="12px"/>
            
        </div>
        <div className="navElement">
            <div>
                <img src={help} alt="" />
                <p>Help</p>
            </div>
            
            <img className="arrowkey" src={arrow} alt="" width="12px" height="12px"/>
            
        </div>
        </div>
        <div className="navbottom">
            <div className="navbottominner">
                <img className="man" src={man} alt="" width="40px" />
                <span className="navbottomcontant">
                    <p>Evano</p>
                    <p>Project Manager</p>
                </span>
            </div>
            <img src={down} alt="" width="12px" style={{'marginRight' : "10px"}}/>
        </div>
        </div>
        
    </>
  )
}

export default Nevbar