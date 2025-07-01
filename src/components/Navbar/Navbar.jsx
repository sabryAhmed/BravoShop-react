import React, { useEffect } from 'react'
import './Navbar.css'
import { FiShoppingCart } from "react-icons/fi";

import { FaHeart } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import {Link} from 'react-router-dom'
import { FaMoon } from "react-icons/fa";
function Navbar({cart,heart,darkmood}) {


  return (
    <nav className="navbar navbar-expand-lg ">
  <a className="navbar-brand" href="#">Bravo <span>Shop</span></a>
  <button className="navbar-toggler border border-dark text-dark bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <TfiMenuAlt />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <Link to={''} className="nav-link" href="#">Home </Link>
      </li>
      <li className="nav-item">
        <Link to={'about'} className="nav-link" href="#">About</Link>
      </li>
     
      <li className="nav-item">
        <Link to={'shop'} className="nav-link" href="#">Shop</Link>
      </li>
     
     
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Prodects
        </a>
        
     
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to={'faceAPI'} className="dropdown-item" href="#">Facke API</Link>
          <Link to={'dummyAPI'} className="dropdown-item" href="#">Dummy API</Link>
     
        </div>
      </li>
      <li className="nav-item">
        <Link to={'contact'} className="nav-link " href="#">Contact</Link>
      </li>

      <li className="nav-item">
       <FaMoon className='mx-1 mood' onClick={()=>{darkmood()}}/>
      </li>
    </ul>

    <div className="pasket-icons d-flex align-items-center justify-content-center gap-1 mx-3  fs-5">
      <div className=' mx-2'>
        <Link to={'Heart'}>
        <FaHeart/>
      <sub>({heart.length})</sub>
      {/* {res.length > 1 : res.Color='red'} */}
        </Link>
      </div>
  
      <div>
        <Link to={'CartShop'} >
        <FiShoppingCart  />
      <sub>({cart.length})</sub>
        </Link>
      </div>
  
      
    </div>
    
  </div>
</nav>
  
  )
}


export default Navbar