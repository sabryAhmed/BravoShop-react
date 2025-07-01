import React from 'react'
import './Servcies.css'
import { FaTruck } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
function Servcies() {
  return (
    <div className='Servcies container my-5  '>
        <div className="row g-2">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="one">
                    <IoCheckmark className='ico'/>
                    <p>Quality Product</p>
                </div>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="one">
                    <FaTruck className='ico'/>
                    <p>
                    Free Shipping</p>
                </div>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="one">
                    <IoCheckmark className='ico'/>
                    <p>14-Day Return</p>
                </div>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="one">
                    <FaTruck className='ico'/>
                    <p>24/7 Support</p>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Servcies