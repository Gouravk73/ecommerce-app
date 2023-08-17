import React from 'react'
import TopDealsList from '../../data/TopDealsList'
import { Link } from 'react-router-dom'
const TopDeals = () => {
  return (
    <div className='text-center'>
      <h1>HOT DEAL</h1>
      <p>Don't Miss Today's Featured Deals</p>
      <div className='container d-flex justify-content-between'>
        <div className="row">
          {
            TopDealsList.map((item)=>
            <div className="col-md-4 mb-4 text-center" key={item.id}>
                    <Link to={`/shop/${item.id.replace(/[0-9]/g,'')}/${item.name}`} style={{textDecoration:'none',color:'black'}}>
                        {item.image.map((imageItem, index) => 
                            <div key={index} >
                                <img src={imageItem.image}   alt="Bag" style={{   maxWidth: '90%' }}/>
                            </div>)}
                        <p>{item.name}</p>
                        <p>₹{item.price}</p>
                    </Link>
                </div>)
          }
        </div>
      </div>

    </div>
  )
}

export default TopDeals