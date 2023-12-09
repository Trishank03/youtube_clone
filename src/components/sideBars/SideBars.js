import React from 'react';
import { Dropdown } from 'react-bootstrap';
import {FaBars,FaMusic} from 'react-icons/fa';
import './SideBars.css';
import {AiOutlineFire,AiOutlineShopping,AiFillCustomerService,AiFillVideoCamera,AiOutlineSetting} from 'react-icons/ai';
function SideBars() {
   
  return (
    <div>
    <Dropdown className='' style={{height:"100%"}}>
      <Dropdown.Toggle variant="bg-dark text-white" id="dropdown-basic">
       <FaBars/>
      </Dropdown.Toggle>

      <Dropdown.Menu variant="text-white" >
    
        <Dropdown.Item  ><AiOutlineFire className='me-2 pb-1'/> Trending </Dropdown.Item>
        <Dropdown.Item  ><AiOutlineShopping className='me-2 pb-1'/> Shopping</Dropdown.Item>
        <Dropdown.Item  ><AiFillCustomerService  className='me-2 pb-1'/> Music</Dropdown.Item>
        <Dropdown.Item  ><AiFillVideoCamera className='me-2 pb-1'/> Movies</Dropdown.Item>
        <Dropdown.Item  ><AiOutlineSetting className='me-2 pb-1'/> Settings</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  )
}

export default SideBars