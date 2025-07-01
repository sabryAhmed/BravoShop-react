import React from 'react'
import './Headar.css'
import Slider from "react-slick";
function Headar() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500 
    
  };

  return (
    <div className='Header container my-5'>
      <div className="row">

      <div className="col-lg-8 col-md-12">
        <Slider {...settings} className="slider">
          <div className="mens">
            <b>Mens Fashon</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum delectus, quas quisquam provident fugit odit mollitia laudantium beatae qui nisi labore cupiditate unde optio hic iste voluptatum! Error, soluta possimus?</p>
            <button className='btn btn-shop'>Shop Now</button>
          </div>
          <div className="kids">
            <b>Kids Fashon</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum delectus, quas quisquam provident fugit odit mollitia laudantium beatae qui nisi labore cupiditate unde optio hic iste voluptatum! Error, soluta possimus?</p>
            <button className='btn btn-shop'>Shop Now</button>
          </div>
          <div className="girl">
            <b>Girl Fashon</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum delectus, quas quisquam provident fugit odit mollitia laudantium beatae qui nisi labore cupiditate unde optio hic iste voluptatum! Error, soluta possimus?</p>
            <button className='btn btn-shop'>Shop Now</button>
          </div>

        </Slider>
      </div>

      <div className="col-lg-4 col-md-12">
        <div className="offers">
          <div className="offer-1">
            <span>Save 20%</span>
            <p>Special offer</p>
            <button className='btn btn-shop'>Shop Now</button>
          </div>
          <div className="offer-2">
            <span>Save 20%</span>
            <p>Special offer</p>
            <button className='btn btn-shop'>Shop Now</button>
          </div>
        </div>
      </div>



      </div>
      
    </div>
  )
}

export default Headar