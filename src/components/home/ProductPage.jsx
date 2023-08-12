import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LAPTOP from '../../data/laptop';
import CabinBag from '../../data/CabinBag';
import Duffle from '../../data/duffle';
import BestSellers from '../../data/bestSellers';
import Backpack from '../../data/backpack'
import { Carousel } from 'react-bootstrap';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import TopDeals from './TopDeals'


const ProductDetailPage = () => {
  const [wishListAdded,setWishListAdded] =useState(false);
  const { productType, productName } = useParams();

  const products = [
    ...LAPTOP,
    ...CabinBag,
    ...Duffle,
    ...BestSellers,
    ...Backpack,
  ];
  const product = products.find(
    (item) => item.id.replace(/[0-9]/g, '') === productType && item.name === productName
  );
  const clickWihshListHandler=()=>{
    setWishListAdded(true);
  }
  if (!product) {
    return <div>Product not found</div>;
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
      <button className='btn m-2 px-3 py-2' style={{border:'1px solid red'}}>-</button>
      <button className='btn m-2 px-4 py-2' style={{border:'1px solid red'}}>quantity</button>
      <button className='btn m-2 px-3 py-2' style={{border:'1px solid red'}}>+</button>

      </div>
      <div className='col '>
      <button className='btn m-2 px-5 py-2' style={{backgroundColor:'orange'}}>ADD TO CART</button>
      {!wishListAdded &&<button className='btn m-2' style={{border:'1px solid red'}} onClick={clickWihshListHandler}>
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
