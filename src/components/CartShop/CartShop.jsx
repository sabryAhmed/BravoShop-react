import React from 'react'
import './CartShop.css'






function CartShop({cart,Deletpro,increaseAmount,decreaseAmount}) {

  return (
    <div className='container my-5 CartShop'>

    {cart.length ?  <>

      <div className="row d-flex align-items-center justify-content-center  g-3">
{cart.map((val , index)=>{

  
  



return (

  <div className="col-lg-12" key={index}>
            <div className="col-lg-8 col-md-6 col-smd-12 shadow w-100 pas">
              <div className="card-image p-1">
                <img src={val.img||val.image||val.thumbnail} alt="" />
                <p className='text-success'>title: {val.title?.split(" ").slice(0,2).join('')}</p>
              </div>
         
              <div className="card-detils flex-column">
                <p className='fs-5 L'>price : {val.price}</p>
              
                <p className=' fw-bold text-danger'>Total price : ${(val.amount * val.price).toFixed(2)} </p>
             
              
              </div>
              <div className="card-plus  d-flex gap-4">
                <p className='plus' onClick={()=>{increaseAmount(val)}}>+</p>
                <span className='L'>{val.amount}</span>
                <p className='muns' onClick={()=>{decreaseAmount(val)}}>-</p>
              </div>

              <div className="card-btn">
                <button className='btn btn-danger ' onClick={()=>{Deletpro(val)}}>remove from cart</button>
              </div>

            </div>

          </div>
)

}

)

}

</div>


</>

:
<div className="alert alert-success h2  uppercase  text-center  "> Not found Prodects</div>



}


</div>

        
  )
}

export default CartShop