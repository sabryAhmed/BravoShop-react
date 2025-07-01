import React from 'react'
 import './FaceAPI.css'
 import loder from '../../assets/imgs/camra-2.jpg'

import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import Lottio from 'lottie-react'
import loadingpage from'../LottiFiles/loaidng.json'


function FaceAPI({prodect,loding,addTocard,AddToheart}) {

  
  


  return (
    <div className="container my-5 FaceAPI text-center">
      <p className='text-uppercase h2 text-center fw-bolder' style={{color:'var(--main-color)'}}> Face Prodect</p>
      <p className=' text-center L'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, aliquid. Praesentium, asperiores eveniet laboriosam aut saepe quod id assumenda accusantium voluptatum illum ipsa fugiat incidunt voluptates impedit ullam fuga eligendi?</p>
            <div className="row g-2">

            {loding ? 
    <div className="loding">
      <Lottio animationData={loadingpage} className='loding w-100'/>
    </div>
  
:
  

            prodect.map(value=>{
              return (
      
                
                <div className="col-lg-3 col-md-6 col-smd-12" key={value.id}>
                <div className="card " >
                  <Link className="card-img" to={`/Detils/${value.id}`}>
                    <img src={value.image} alt="" className='card-img'   />
                  </Link>
                  <div className='card-body  '>
                    
                    <p className='text-center text-primary .' >Title : {value.title?.split(' ').slice(0,3).join(' ') } </p>
                    <p className='text-center text-success'> ${value.price} </p>
                  
                  <div className="pro">
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

export default FaceAPI