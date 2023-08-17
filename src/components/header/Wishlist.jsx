import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import {AiOutlineHeart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { WishlistSliceActions } from '../../store/Wishlist-slice'
import { WishlistDataPost } from '../../api/wishlist/wishlistPost'
import { CartSliceActions } from '../../store/cart-slice'


const Wishlist = () => {
  let email=useSelector((state)=>state.login.userEmail).split(/[@.]/).join('')
  const dispatch =useDispatch();
  const[isLoading,setLoading] = useState(false);
  const wishlistItem=useSelector((state)=>state.wishlist.wishlistItems)
    const [show,setShow]=useState(false);
    const handleClose=()=> setShow(false);
    const handleOpen=()=> setShow(true);

    const WishlistDeleteHandler=async(item)=>{
      setLoading(true);

      const filterItem=wishlistItem.filter((temp)=>temp.id!==item.id)
      console.log(filterItem)
      const data =await WishlistDataPost(filterItem,email)
      if(data==null)
      dispatch(WishlistSliceActions.setWishlistItems([]))
    else
      dispatch(WishlistSliceActions.setWishlistItems(data))
      setLoading(false);

    }
    const addToCartHandler=(item)=>{
      setLoading(true);
      dispatch(CartSliceActions.addToCart(item));
      WishlistDeleteHandler(item)
    }

  return (
    <>
      <AiOutlineHeart size={'1.5rem'} onClick={handleOpen} style={{color:'#FF6347',margin: '7px 0 0 10px',cursor:'pointer'}}/>
      <span className="badge badge-danger "  style={{ fontSize: '0.8rem', color: '#FF6347' ,margin:' -7px'}}>{wishlistItem.length}
        </span>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>

        <Offcanvas.Body>
        <h1 >Wishlist Items</h1>
                 {wishlistItem.map((item)=> 
                    <div className="row d-flex justify-content-between" style={{opacity:`${isLoading?0.2:1}` }  } key= {item.id}>
                      {<>
                        <div className="col">
                          {item.image && item.image.map((img,index)=> (index===0&&<Link
                            key={index} 
                            onClick={()=>handleClose()}
                            to={`/shop/${item.id.replace(/[0-9]/g,'')}/${encodeURIComponent(item.name)}`}>
                              <img src={img.image} alt="wishlist" style={{maxWidth:'100%'}}/>
                            </Link>))}
                          </div>
                        <div className="col">
                        <h6>{item.name}</h6>
                        <p>₹ {item.price}</p>
                        <div className='row'>
                        <button  className='btn btn-danger my-2'onClick={()=>{WishlistDeleteHandler(item) }}>Remove from wishlist</button>
                        <button  className='btn btn-success my-2' onClick={() => addToCartHandler(item)}>ADD TO CART</button>

                        </div>
                      </div>
                  </>}
                  </div>
                  )
                  }
            </Offcanvas.Body>
        </Offcanvas>
        

    </>
  )
}

export default Wishlist