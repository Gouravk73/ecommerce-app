import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { CartSliceActions } from '../../store/cart-slice';
import useScrollToTop from './ScrollToTop';

const ProductToDisplay = ({productDisplay}) => {
    const dispatch=useDispatch();
    const addToCart=(item)=>{
        dispatch(CartSliceActions.addToCart(item));
    }
     const scrollToTop = () => {
      console.log("scroll")
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  return (
    <div className="row" >
    {productDisplay.map((item)=>
        <div className="col-md-4 mb-4 text-center" key={item.id}  >
            <Link onClick={scrollToTop} to={`/shop/${item.id.replace(/[0-9]/g,'')}/${encodeURIComponent(item.name)}`} style={{textDecoration:'none',color:'black'}}>
                {item.image.map((imageItem, index) => 
                    index===0&&<div key={index}  style={{backgroundColor:'#F4F4F4',height:'300px'}}> 
                        <img src={imageItem.image}   alt="Bag" style={{ objectFit:'contain',  maxWidth: '70%',height:'100%' }}/>
                    </div>)}
                <p style={{backgroundColor:'#F4F4F4'}}>{item.name}</p>
                <p style={{backgroundColor:'#F4F4F4'}}>₹{item.price}</p>
                <div>
                  <span>{item.rating}</span>{Array.from({length:item.rating},(_,index)=><span key={index}>⭐️</span>)}
                </div>

            </Link>
            <button className='btn m-2 px-5 py-2' style={{ backgroundColor:'orange',color:'white'}} onClick={()=>addToCart(item)}>ADD TO CART</button>

        </div>
     )}
</div>
  )
}

export default ProductToDisplay