import React from 'react'
 import './Shop.css'
 import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Prodect_JSon } from '../Prodect/ProdectJSON';

function Shop({addTocard,AddToheart}) {
  return (
      <div className='Prodect container my-5'>
        <p className='text-uppercase h2 text-center' style={{color:'var(--main-color)'}}>Prodect</p>
        <div className="row g-2">
        {Prodect_JSon.map(value=>{
          return (
  
            
            <div className="col-lg-3 col-md-6 col-sm-12" key={value.id}>
            <div className="card ">
              <div className="card-img">
                <img src={value.img} alt="" className='card-img' />
              </div>
              <div className='card-body  '>
                <b className='fw-bolder text-center text-uppercase d-block fs-4'>{value.title}</b>
                <p className='text-center'>{value.price} <del className='text-danger'>{value.discount}</del></p>
              <div className='card-star'>
                <FaStar style={{color:'gold'}}/>
                <FaStar style={{color:'gold'}}/>
                <FaStar style={{color:'gold'}}/>
                <FaStar style={{color:'gold'}}/>
                <FaStar style={{color:'gold'}}/>
              </div>
              <div className="proccess">
                <div>
                  <FaCartShopping onClick={()=>{addTocard(value)}}/>
                </div>
    
                <div>
                  <FaHeart onClick={()=>{AddToheart(value)}}/>
                </div>
              </div>
              
              </div>
            </div>
    
          </div>
  
          )
          
        })}
  
        </div>
      </div>
    )
  
}

export default Shop