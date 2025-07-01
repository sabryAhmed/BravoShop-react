import React from 'react'
import shop from '../../assets/imgs/About-Shop.jpg'

 import './About.css'
function About() {
  return (
    <div className='container my-5 About '>
      <div className="row">
          <p className='text-center m-4 fw-bolder h1 L'> About <span >Us</span></p>
          
        <div className="col-lg-7 col-smd-12  ">
          

            <div className="one">
              
                <img src={shop} alt="" />
             
            </div>

       
        </div>

        <div className="col-lg-3 col-smd-12 m-2">
            <p className='L'>Welcome To <span className='fw-bolder fs-5'>Bravo Shop</span></p>
          <div className="card">
<span className='L'>Bravo Shop</span> <p className='L'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aperiam, incidunt dolor sapiente ullam porro repellat sed. Officiis, odio est, iusto ipsa et labore officia, tempore placeat illum molestiae autem.</p>
            <button>shop Now</button>
          </div>
        </div>
      </div>
    
    </div>

  )
}

export default About