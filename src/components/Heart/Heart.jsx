import React from 'react'
import './Heart.css'


import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
function Heart({heart,addTocard,removefromheart}) {
  return (
    <div className='containter my-5 Heart  '>
      <div className="row g-2">

        {heart.length > 0?

heart.map((val,inde)=>{
  return (

<div className="col-lg-4 col-md-6 col-smd-12" key={inde}>
  <div className="card w-75 mx-5  ">
    <div className="card-image ">
    <img src={val.img||val.image||val.thumbnail} alt="" />
    </div>
    
    <div className="card-detils text-center flex-column ">
      <p className='text-warning fs-4 '>{val.title?.split(" ").slice(0,1).join('')}</p>
      <strong className='d-block  '>price : <span className='text-danger'>${val.price}</span></strong>
    </div>
    <div className="card-ico fs-5">
      <div>

< IoCloseSharp onClick={()=>{removefromheart(val)}} />
      </div>
      <div>

< MdOutlineAddShoppingCart onClick={()=>{addTocard(val)}}/>
      </div>

    </div>
  </div>

</div>
  )
})
          :
          <div className='fs-2 fw-bolder text-danger '>  You`r Not Add prodect to Wishlest..!</div>

        }


       
      </div>
    </div>
  )
}

export default Heart