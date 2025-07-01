import React, { useEffect, useState } from 'react'
 import './DetilsProdects.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function DetilsProdects() {
  let url='https://fakestoreapi.com/products'

  

    let {id} = useParams()
    let [singlepro, Setsinglepro]= useState({})
    
    async function DetilsProduct(){


      let {data}= await axios.get(`${url}/${id}`)
      
      Setsinglepro(data)
    }
    
    useEffect(()=>{
      DetilsProduct()
    },[])
    
  return (
    <div className='conatiner my-5 '>
      <div className="row">
        <div className="col-lg-4">
          <div className="card-image d-flex align-items-center shadow border">
            <img src={singlepro.image}  alt=""  className='card-image w-100'/>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="details p-5 d-flex flex-column">
            <strong className='text-center h3 gol'>{singlepro.title?.split('').slice(0,5).join()}</strong>
            <div className=' fw-bolder  ca'>
              <p className='L'>{singlepro.description}</p>
              <p className='L'>{singlepro.category}</p>
             
              <p className='text-danger fs-4 '> ${singlepro.price}</p>
            
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DetilsProdects
