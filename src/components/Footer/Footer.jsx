import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import img_visa from '../../assets/imgs/visa.png'
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <footer className='container w-100 footer '>
      <div className="row my-5 g-5">
        

        
        <div className="col-lg-3 col-md-6 col-smd-12  ">
          <div className="cardss  ">
          <strong className='text-center text-uppercase text-light my-5' > Get In Touch</strong>
          <div className="one text-center">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, reiciendis ea optio rem nam aliquid in quo minus temporibus blanditiis, repellendus cumque! Laudantium eligendi tempore ipsa autem quidem commodi porro.</p>
          </div>
        </div>

          </div>
        <div className="col-lg-3 col-md-6 col-smd-12 ">
          <div className="cardss  ">
          <strong className='text-center text-uppercase text-light my-5' > Quick Shop</strong>
          <div className="one text-center">
           <p>Home</p>
           <p>About</p>
           <p>shop</p>
           <p>Contact</p>
           <p>Cart</p>
          </div>
        </div>

          </div>
          
        <div className="col-lg-3 col-md-6 col-smd-12 ">
          <div className="cardss  ">
          <strong className='text-center text-uppercase text-light my-5' > Shop Media</strong>
          <div className="one text-center d-flex align-items-center flex-column gap-2 ">
            
           <a href="https://www.facebook.com/profile.php?id=61562025602560&mibextid=ZbWKwL"><FaFacebookF/></a>
           <a href=""><FaFacebookMessenger/></a>
           <a href=""><FaTwitter/></a>
           <a href="https://github.com/sabryAhmed"><FaGithub/></a>
           <a href="https://www.instagram.com/sabry_ahmed_7/profilecard/?igsh=MTNiZ2xtNXlta2l6Zw=="><FaInstagram/></a>
           <a href=""><FaLinkedin/></a>
           <a href="https://api.whatsapp.com/send/?phone=201050723990&text&type=phone_number&app_absent=0"><FaWhatsapp/></a>
          </div>
        </div>

          </div>
        <div className="col-lg-3 col-md-6 col-smd-12 ">
          <div className="cardss  ">
          <strong className='text-center text-uppercase text-light my-5' >NEWSLETTER </strong>
          <div className="one text-center d-flex align-items-center flex-column gap-2 ">

            <p>Due stet tempor ipsum sit amet magna ipsum tempor est</p>
            
            <nav className="navbar ">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-info my-1 my-sm-2 w-50" type="submit">Search</button>
  </form>
</nav>

          </div>
        </div>

          </div>

       <div className="card-visa">
        <div className="card-image col-lg-3 col-md-6 col-smd-12 ">
          <img src={img_visa} alt="" />
        </div>
       </div>

      </div>
 
    </footer>
  )
}

export default Footer
