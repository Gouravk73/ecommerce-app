import React from 'react'
import LAPTOP from '../../data/laptop';
import CabinBag from '../../data/CabinBag';
import Duffle from '../../data/duffle';
import Backpack from '../../data/backpack'
import { Link } from 'react-router-dom';
const Shop = () => {
  const product = [
    ...LAPTOP,
    ...CabinBag,
    ...Duffle,
    ...Backpack,
  ];
  return (
    <div>
      <div className='container d-flex justify-content-between py-5'  >
        <div className="row" >
            {product.map((item)=>
                <div className="col-md-4 mb-4 text-center" key={item.id}  >
                    <Link to={`/shop/${item.id.replace(/[0-9]/g,'')}/${encodeURIComponent(item.name)}`} style={{textDecoration:'none',color:'black'}}>
                        {item.image.map((imageItem, index) => 
                            index===0&&<div key={index}  style={{backgroundColor:'#F4F4F4',height:'300px'}}> 
                                <img src={imageItem.image}   alt="Bag" style={{ objectFit:'contain',  maxWidth: '70%',height:'100%' }}/>
                            </div>)}
                        <p style={{backgroundColor:'#F4F4F4'}}>{item.name}</p>
                        <p style={{backgroundColor:'#F4F4F4'}}>₹{item.price}</p>
                        <button className='btn m-2 px-5 py-2' style={{ backgroundColor:'orange',color:'white'}}>ADD TO CART</button>

                    </Link>
                </div>
             )}
        </div>
      </div>
    </div>
  )
}

export default Shop