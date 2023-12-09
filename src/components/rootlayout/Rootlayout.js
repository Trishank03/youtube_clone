import React from 'react'
import Navbar from '../navbar/Navbar';
import {Outlet} from 'react-router-dom';
function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Rootlayout