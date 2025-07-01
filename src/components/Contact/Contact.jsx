import React from 'react'
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
function Contact() {
  return (
    <div className='container my-5 Contact'>
      <div className="row">
        <h1 className='text-center'>Contact <span >Us</span></h1>
        <div className="col-lg-8 col-smd-12">
          <form action="" className='d-flex align-item-center flex-column my-5 gap-3'>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Supjects' />
            <input type="password" placeholder='Password' />
            <textarea name="" id="" placeholder='Message'></textarea>
            <button type='sup'>Send Massage</button>
            
          </form>

        </div>
        <div className="col-lg-3 col-smd-12">
          <div className="box">
            <div >
              <FaPhoneAlt className='i'  /> <span>(+20)010000220002</span>
            </div>
            <div>
              <IoMdMail  className='i' /> <span>sabryahmedss81@gmail</span>
            </div>
            <div>
              <ImLocation2  className='i' /> <span>Egypt - Sharkia - Zagazig</span>
            </div>
             
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact