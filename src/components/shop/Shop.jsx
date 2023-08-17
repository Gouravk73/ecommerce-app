import React, { useEffect, useState } from 'react'
import LAPTOP from '../../data/laptop';
import CabinBag from '../../data/CabinBag';
import Duffle from '../../data/duffle';
import Backpack from '../../data/backpack'
import SortBy from './SortBy';
import Filter from './Filter';
import ProductToDisplay from './ProductToDisplay';
import { scrollToTop } from './ScrollToTop';
import {BsArrowUpCircleFill} from 'react-icons/bs'
const Shop = () => {
  const product = [
    ...LAPTOP,
    ...CabinBag,
    ...Duffle,
    ...Backpack,
  ];
  const [productDisplay,setProductDisplay]=useState(product)
  

  const handleSorting=(sortType)=>{
    if(sortType==='low'){ 
        const sorted=[...productDisplay].sort((a,b)=>a.price-b.price)
        setProductDisplay(sorted);
    }
    else if(sortType==='high'){
       const sorted= [...productDisplay].sort((a,b)=> b.price-a.price)
       setProductDisplay(sorted);
    }
    else if(sortType==='rating'){
      const sorted= [...productDisplay].sort((a,b)=> b.rating-a.rating)
      setProductDisplay(sorted);
    }
  }
  const handleFiltering=(filterType)=>{
    if(filterType === 'duffle'){ setProductDisplay(Duffle)}
    else if(filterType === 'laptop'){setProductDisplay(LAPTOP)}
    else if(filterType === 'cabinBag'){setProductDisplay(CabinBag)}
    else if(filterType === 'Backpack'){setProductDisplay(Backpack)}

  }
  return (
    <div>
      <div className="container py-2">
        <div className="row d-flex align-items-center justify-content-between ">
          <SortBy sortChange={handleSorting}/>
          <Filter filterChange={handleFiltering}/>
        </div>
          <ProductToDisplay productDisplay={productDisplay}/>
      </div>
      <div className='container d-flex justify-content-between py-5'  >
        
      </div>
      <button className="btn "  style={{position: 'fixed',bottom: '20px',right: '20px',display: 'block'}}
          onClick={scrollToTop}
        >
           <BsArrowUpCircleFill size={'2rem'} style={{color:'orange'}}/>
        </button>
    </div>
  )
}

export default Shop