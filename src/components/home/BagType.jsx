import React from 'react';
import BestSellersList from '../../data/bestSellers'
import { Link } from 'react-router-dom';
import { scrollToTop } from '../shop/ScrollToTop';
const BestSellers = () => {
  return (
    <div className='text-center' >
      <h1 >Best Sellers</h1>
      <p>Best Seller Product This Week!</p>

      <div className='container d-flex justify-content-between'  >
        <div className="row">
            {BestSellersList.map((item)=> 
                <div className="col-md-4 mb-4 text-center" key={item.id}>
                    <Link onClick={scrollToTop} to={`/shop/${item.id.replace(/[0-9]/g,'')}/${item.name}`} style={{textDecoration:'none',color:'black'}}>
                        {item.image.map((imageItem, index) => 
                            <div key={index} >
                                <img src={imageItem.image}   alt="Bag" style={{   maxWidth: '90%' }}/>
                            </div>)}
                        <p>{item.name}</p>
                        <p>₹{item.price}</p>
                    </Link>
                </div>
             )}
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
