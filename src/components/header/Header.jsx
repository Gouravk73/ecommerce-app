import React from 'react'
import {  Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai'
const Header = () => {
  return (
    <Navbar bg="light" expand="md" style={{padding:'1rem 1rem 1rem 2rem'}}>
      <Link to="/" className="navbar-brand" style={{fontSize:'2rem',fontWeight:'900'}}>
      BagStore
      </Link>
      <div className='ml-md-auto d-md-none'> 
      <AiOutlineShoppingCart size={'1.5rem'}/>
        <span class="badge badge-danger "  style={{ fontSize: '0.8rem', color: 'black' ,marginLeft:' -7px'}}>4
        </span>
     <Navbar.Toggle aria-controls="nav" />

     </div>

      <Navbar.Collapse id="nav" style={{justifyContent:'end'}}>
      <Nav >
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
    </Navbar.Collapse>
    <div className='ml-md-auto d-none d-md-block' style={{color:'red',padding:'0 10px'}}>
     <input type="text" style={{ marginLeft: '10px' }} />
     <AiOutlineHeart size={'1.5rem'} style={{color:'red',marginLeft: '10px'}}/>
     <AiOutlineShoppingCart size={'1.5rem'} style={{ marginLeft: '10px' }} />
        <span class="badge badge-danger "  style={{ fontSize: '0.8rem', color: 'black' ,margin:' -7px'}}>4
        </span>
    
     </div>
  </Navbar>
  )
}

export default Header