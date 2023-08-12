import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai'
import Wishlist from './Wishlist';

const Cart = () => {
    const [show,setShow]=useState(false);
    const handleClose=()=> setShow(false);
    const handleOpen=()=> setShow(true);
  return (
    <>
        <div  style={{color:'red' ,padding:'0 10px 0 0'}}>
        <Wishlist/>
      <AiOutlineShoppingCart size={'1.5rem'} style={{ margin: '7px 0 0 10px',cursor:'pointer',color:'#FF6347' }} onClick={handleOpen}/>
        <span className="badge badge-danger "  style={{ fontSize: '0.8rem', color: '#FF6347' ,margin:' -7px'}}>4
        </span>

     </div>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                Cart
            </Offcanvas.Body>

        </Offcanvas>
    </>
  )
}

export default Cart