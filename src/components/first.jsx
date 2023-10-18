import React from 'react'
import dollar from '../icons/dollar.jpg';
import note from '../icons/note.jpg';
import money from '../icons/money.jpg';
import bag from '../icons/bag.jpg';
import down from '../icons/down.png'
import up from '../icons/top-up.png'

const First = () => {
  return (
    <>
        <div className="firstmain">
            <div className="firstinner">
                <img src={dollar} alt="" />
                <div>
                    <p className='small'>Earning</p>
                    <p className='bold'>$198k</p>
                    <p><span className='greenup'> <img src={up} alt="" width="12px"/>37.8%</span>this month</p>
                </div>
            </div>
            <div className="firstinner">
                <img src={note} alt="" />
                <div>
                <p className='small'>Orders</p>
                    <p className='bold'>$2.4k</p>
                    <p><span className='reddown'> <img src={down} alt="" width="12px"/>2%</span>this month</p>
                </div>
            </div>
            <div className="firstinner">
                <img src={money} alt="" />
                <div>
                <p className='small'>Balance</p>
                    <p className='bold'>$2.4k</p>
                    <p><span className='reddown'> <img src={down} alt="" width="12px"/>2%</span>this month</p>
                </div>
            </div>
            <div className="firstinner">
                <img src={bag} alt="" />
                <div>
                <p className='small'>Total Sales</p>
                    <p className='bold'>$89k</p>
                    <p><span className='greenup'> <img src={up} alt="" width="12px"/>11%</span>this month</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default First