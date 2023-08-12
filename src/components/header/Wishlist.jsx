import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import {AiOutlineHeart} from 'react-icons/ai'

const Wishlist = () => {
    const [show,setShow]=useState(false);
    const handleClose=()=> setShow(false);
    const handleOpen=()=> setShow(true);
  return (
    <>
      <AiOutlineHeart size={'1.5rem'} onClick={handleOpen} style={{color:'#FF6347',margin: '7px 0 0 10px',cursor:'pointer'}}/>
        
        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton></Offcanvas.Header>

        <Offcanvas.Body>
                wishlist
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default Wishlist