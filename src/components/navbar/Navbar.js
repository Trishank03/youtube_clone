import React from 'react'

import {BsSearch} from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import './Navbar.css';
import SideBars from '../sideBars/SideBars';
import {Link} from 'react-router-dom';

function Navbar() {
 
  return (
    <div className='first'>
     <ul className='nav flex-row'>
     
      <div className='nav1'>
      
        <li className='nav-item d-flex '>
        <SideBars />
            <Link className='nav-link' to="/">
           
            <BsYoutube className='m-3 text-white fs-1'/>
              <button className='but1'>
                YouTube 
              </button>
               
            </Link> 
        </li>
        </div>

        <div className='nav2 d-flex mt-3'>
          <Link to="search">
            <div className='mt-2'>
            <BsSearch className='fs-4 text-white'/>
            </div>
              
          </Link>
   
        <li className='nav-item '>
            <Link className='nav-link fs-5 text-white' to="login">
                Login 
            </Link>
        </li>
         </div>
     </ul>
    </div>
  )
}

export default Navbar