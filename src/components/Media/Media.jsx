import React from 'react'
import Slider from "react-slick";
import img from '../../assets/imgs/download (1).jfif'
import img_2 from '../../assets/imgs/download (2).jfif'
import img_3 from '../../assets/imgs/download.jfif'
import img_4 from '../../assets/imgs/vendor-6-CmmiMxIm-CmmiMxIm.jpg'
import img_5 from '../../assets/imgs/vendor-7-BBAmhwW7 (1)-BBAmhwW7.jpg'
import'./Media.css'

function Media() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:150 
        
      };

  return (
   
         <div className='Media   container  '>
        <div className="row g-2">
        <Slider {...settings} className='col-lg-3 col-md-6 col-smd-12   slid'>
     <div className="col-lg-3 col-md-6 col-smd-12">
        <img src={img} alt="" className='w-25' />
     </div>
     <div className="col-lg-3 col-md-6 col-smd-12">
        <img src={img_2} alt=""   className='w-25' />
     </div>
     <div className="col-lg-3 col-md-6 col-smd-12">
        <img src={img_3} alt=""   className='w-25'/>
     </div>
     <div className="col-lg-3 col-md-6 col-smd-12">
        <img src={img_4} alt=""   className='w-25'/>
     </div>
     
     <div className="col-lg-3 col-md-6 col-smd-12">
        <img src={img_5} alt=""   className='w-25'/>
     </div>
     
    </Slider>
        </div>
    </div>
    
  )
}

export default Media