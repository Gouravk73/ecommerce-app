import React, { useState } from 'react'
import {  Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import MobileHeader from './MobileHeader'
import Cart from './Cart'
const Header = () => {
  const[show,setShow]=useState(false);
  const HandleClose=()=>setShow(false);
  const HandleOpen=()=>setShow(true);
  return (
    <Navbar bg="light" expand="md" style={{padding:'0 1rem 0 2rem' ,justifyContent:'space-between'}}>
      <Link to="/" className="navbar-brand" style={{fontSize:'1.8rem',fontWeight:'800', transform:'rotate(-10deg)',textDecoration:'underline'}}>
      <span>Bags</span>
      <p>Store</p>
      
      </Link>
      <div>
      <div className='d-flex px-2 ml-md-auto d-md-none'>
        <Cart />
       
        <button className='navbar-toggler' onClick={HandleOpen}>
          <span className='navbar-toggler-icon'></span>
        </button>
     </div>

      <div  style={{ display:'flex',justifyContent:'space-evenly'}} >
      <div className='ml-md-auto d-none d-md-block' id="nav" style={{justifyContent:'end'}}>
      <Nav  className='d-md-block'>
        <ul className="navbar-nav ml-auto px-5 ">
            <li className="nav-item px-2 " style={{fontSize:'1.2rem',fontWeight:'900'}}>
              <NavLink className="nav-link"   to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item px-2"  style={{fontSize:'1.2rem',fontWeight:'900'}}>
              <NavLink className="nav-link"   to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item px-2"  style={{fontSize:'1.2rem',fontWeight:'900'}}>
              <NavLink className="nav-link"   to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
      </Nav>

    </div>
    <div className='ml-md-auto d-none d-md-block' >
    <Cart/>
    </div>

    
      </div>
     </div>
     <MobileHeader show={show} handleClose={HandleClose} />
  </Navbar>
  )
}

export default Header