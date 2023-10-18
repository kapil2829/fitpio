import React from 'react';
import bot1 from '../icons/bottomTop.jpeg';
import bot2 from '../icons/bottomDown.jpeg';
import pic from '../icons/pic.png'


const bottom = () => {
  return (
    <>
        <div className="bottommain">
            <div className="bottomtop">
                <p className='product'><b>Product Sell</b></p>
                <div className="bottomtopright">
                    <div className="searchmain">
                    <i className="fa-solid fa-magnifying-glass"></i>
                        <input className="searchinput" type="text" placeholder='search'/>
                    </div>
                    <div className='searchmain-arrow'>
                        <p className='lastday'>Last 30 days</p>
                        <img className="picdown"src={pic} alt="" width="12px" height="16px" />
                      
                    </div>
                </div>

            </div>
            <div className="bottomheads">
                <p className='colorgray'>Product Name</p>
                <div className="bottomheadsmiddle">
                    <p className='colorgray'>Stock</p>
                    <p className='colorgray'>Price</p>
                    <p className='colorgray'>Total Sales</p>
                </div>
            </div>
            <div className="bottombottom">
                <div className="leftbottom">
                    <img src={bot1} alt="" width="75px" />
                    <div>
                        <p><b>Abstract 3D</b></p>
                        <p className='colorgray'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="rightbottom">
                    <p>32 in stock</p>
                    <p className='rightbottomp2'><b>$ 45.99</b></p>
                    <p className='rightbottomp2'>20</p>
                </div>
            </div>
            <div className="bottombottom">
                <div className="leftbottom">
                    <img src={bot2} alt="" width="75px"/>
                    <div>
                        <p><b>Sarphens Illustration</b></p>
                        <p className='colorgray'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="rightbottom">
                    <p>32 in stock</p>
                    <p className='rightbottomp2'><b>$ 45.99</b></p>
                    <p className='rightbottomp2'>20</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default bottom