import React from 'react'
import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
export default function Nav({Cart}) {
  const Navigate= useNavigate();
  return (
<>
    <div className='container-fluid  Navbar '>
       <div className='col-4 Logo '><span className='fs-1 logo'>Tomato</span></div>
       <div className='col-4 Links'>
        <ul className=''>
            <li> <Link className='Linkks' to='/'>Home</Link></li>
            <li> <Link className='Linkks' to='/About'>About</Link></li>
            <li> <Link className='Linkks' to='/Contact'>Contact</Link></li>
            
        </ul>
       </div>
       <div className='Signup-side center'>
        <Link to='/login'><button className='btn '>Login</button></Link>
        <Link to='/register'><button  className='btn'>Register</button></Link>
        <span onClick={()=>{Navigate('/checkout')}} className='btn CB'>Cart : {Cart.length}</span>
       </div>

       
    </div>
</>
  )
}
