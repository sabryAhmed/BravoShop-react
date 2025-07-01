import React, { useEffect, useState } from 'react'
import './DummyDetalsAPI.css'
import { useParams,} from 'react-router-dom'
import axios from 'axios'
function DummyDetalsAPI() {
    let  urldummyAPI="https://dummyjson.com/products"

    
    let {id} = useParams()
    let [singleproDummy, Setsinglepro]= useState({})
    
    async function DetilsDummy(){


      let {data}= await axios.get(`${urldummyAPI}/${id}`)
      
      Setsinglepro(data)
    }
    
    useEffect(()=>{
        DetilsDummy()
    },[])

  return (
    <div className='conatiner my-5 DummyDetalsAPI'>
    <div className="row">
      <div className="col-lg-4">
        <div className="card-image d-flex align-items-center shadow border">
          <img src={singleproDummy.image || singleproDummy.thumbnail}  alt=""  className='card-image w-100'/>
        </div>
      </div>
      <div className="col-lg-8 col-md-12">
        <div className="details p-5 d-flex flex-column">
          <strong className='text-center h3 L'>{singleproDummy.title?.split(" ").slice(0,5).join(" ")}</strong>
          <div className=' fw-bolder  ca'>
            <p className='L' >{singleproDummy.description}</p>
            <p className='L'>{singleproDummy.category}</p>
            <p className='text-danger fs-4 '> ${singleproDummy.price}</p>
            
          </div>
        </div>
      </div>

    </div>
  </div>
    
  )
}

export default DummyDetalsAPI
