import React, {  useEffect, useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Wishlist from './Wishlist';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartSliceActions } from '../../store/cart-slice';
import { CartAddItemToApi } from '../../api/cart/cartAddItemToApi';

const Cart = () => {
  const cartItems=useSelector((state)=>state.cart.cartItems)
  let email = useSelector((state) => state.login.userEmail);
  const[isLoading,setLoading] = useState(false);
  const dispatch=useDispatch();
  email = email.split(/[@.]/).join('');
 
    const [show,setShow]=useState(false);
    const handleClose=()=> setShow(false);
    const handleOpen=()=> setShow(true);
    let total=0;
    cartItems.forEach((item)=>{
      total= total+(item.price*item.quantity);
  })
    useEffect(()=>{
      if(cartItems.length>=0){
        const postData= async()=>{
        await CartAddItemToApi(cartItems, email);
        }
        postData()
      }
    },[cartItems,email]);
    const addItemHandler=(item)=>{
      setLoading(true);
      dispatch(CartSliceActions.incrementQuanity(item))
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    const deleteItemHandler=(item)=>{
      setLoading(true);
      dispatch(CartSliceActions.decrementQuanity(item))
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  return (
    <>
        <div  style={{color:'red' ,padding:'0 10px 0 0'}}>
        <Wishlist/>
      <AiOutlineShoppingCart size={'1.5rem'} style={{ margin: '7px 0 0 10px',cursor:'pointer',color:'#FF6347' }} onClick={handleOpen}/>
        <span className="badge badge-danger "  style={{ fontSize: '0.8rem', color: '#FF6347' ,margin:' -7px'}}>{cartItems.length}
        </span>

     </div>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
        <h1 >Cart Items</h1>

              {
                cartItems.map((item)=><div className='row d-flex justify-content-between' style={{opacity:`${isLoading?0.2:1}`}} key={item.id}>
                  <div className="col">
                          {item.image && item.image.map((img,index)=> (index===0&&<Link key={index}>
                              <img src={img.image} alt="wishlist" style={{maxWidth:'100%'}}/>
                            </Link>))}
                    </div>
                    <div className="col">
                    <h6>{item.name}</h6>
                    <p>₹ {item.price}</p>
                    <div className="row">
                      <div className='col '>

                        <button className='btn m-2 px-2 py-1' style={{border:'1px solid red'}} onClick={()=>{deleteItemHandler(item)}}>-</button>
                        <button className='btn m-2 px-2' style={{border:'1px solid red'}}>{item.quantity}</button>
                        <button className='btn m-2 px-2 py-1' style={{border:'1px solid red'}} onClick={()=>addItemHandler(item)}>+</button>

                      </div>
                    </div>
                    <span>Sub total </span><button className='btn m-2 px-2 py-1' style={{border:'1px solid red'}}  >₹ {item.quantity*item.price}</button>

                    </div>
                    <hr />
                </div>)
              }
              <div className="container   ">
    {cartItems.length===0&&<h1>Nothing in cart  </h1>}

                <div className='col d-flex justify-content-end p-2 ' >
                 {cartItems.length!==0&& <h3>Total Price {total}</h3>}
                </div>
                <div className='col d-flex justify-content-end p-2 '>
                    {cartItems.length!==0&&<button className='btn btn-success'>purchase now</button>}
                    {cartItems.length===0&&<Link to={'/shop'} onClick={handleClose}> <button className='btn btn-success'>Shop Now</button></Link>}
                </div>

              </div>
              
            </Offcanvas.Body>

        </Offcanvas>
    </>
  )
}

export default Cart