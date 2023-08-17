import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LAPTOP from '../../data/laptop';
import CabinBag from '../../data/CabinBag';
import Duffle from '../../data/duffle';
import Backpack from '../../data/backpack'
import { Carousel } from 'react-bootstrap';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import TopDeals from './TopDeals'
import { useDispatch, useSelector } from 'react-redux';
import { WishlistSliceActions } from '../../store/Wishlist-slice';
import { WishlistDataPost } from '../../api/wishlist/wishlistPost';
import { CartSliceActions } from '../../store/cart-slice';
 

const ProductDetailPage = () => {
  const dispatch=useDispatch();
  const [wishListAdded,setWishListAdded] =useState(false);
  const { productType, productName } = useParams();
  let email= useSelector((state)=>state.login.userEmail);
  let wishItem= useSelector((state)=>state.wishlist.wishlistItems);
   email=email.split('@').join('')
  email=email.split('.').join('')
  const products = [
    ...LAPTOP,
    ...CabinBag,
    ...Duffle,
    ...Backpack,
  ];
  const product = products.find(
    (item) => item.id.replace(/[0-9]/g, '') === productType && item.name === productName
  );

useEffect(()=>{
  const existing= wishItem.find((wishit)=>wishit.id === product.id)
    if(existing){setWishListAdded(true);}
    else setWishListAdded(false);
},[product,wishItem])


//wishListApi item add to api

const wishListApi = async (item) => {
  dispatch(WishlistSliceActions.addItemToWishlist(item));
}

useEffect(() => {
  if (wishItem.length > 0) {
      const postData = async () => {
           await WishlistDataPost(wishItem, email);
      };
      postData();
  }
}, [wishItem, email]);
//wishListApi item add to enc


//cart item add to api
const cartListApi=async (item) => {
  await dispatch(CartSliceActions.addToCart(item))
}
//cart item add to end

 

  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <>
      <div className='row  ' style={{ justifyContent:'center'    }}>

        <div className="col-md-6 mb-6   col-12" style={{ height:'350px',width:'400px',  }}>
          <Carousel className='carousel-dark slide '  >
            {product.image.map((item,ind)=><Carousel.Item   key={ind} >
              <img src={item.image} alt="" style={{objectFit:'contain'  ,width:'400px'  ,height:'350px' }} />
            </Carousel.Item>)}
          </Carousel>
        </div>

        <div className="col-md-6 mb-6  p-5 col-12 " >
          <h2>{product.name}</h2>
          <p>{product.description}</p>

          <h2>₹{product.price}</h2>
          <button className='btn my-2' style={{border:'1px solid red'}}>Free Size</button>

          <div className='col '>
            <button className='btn m-2 px-5 py-2' style={{backgroundColor:'orange'}} onClick={()=>{cartListApi(product)}}>ADD TO CART</button>
            {!wishListAdded &&<button className='btn m-2' style={{border:'1px solid red'}} onClick={()=>{wishListApi(product)}}>
              { <AiOutlineHeart color='orange'  size={'1.8rem'}/>}
            </button>}
            {wishListAdded&&<button className='btn m-2' style={{border:'1px solid red'}}>
              <AiFillHeart color='orange'  size={'1.8rem'} />
            </button>}

          </div>
          <ul>
                {product.features.map((item,ind)=><li key={ind}>
                  {item}
                </li> )}
                  
                  </ul>
        </div>
      </div>
      <div className=' d-md-block  d-sm-none'>
        <TopDeals />

      </div> 
    </>
  );
};

export default ProductDetailPage;
