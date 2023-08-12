import React from 'react'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {IoMdCash} from 'react-icons/io'
import {TfiHeadphoneAlt} from 'react-icons/tfi'
const Features = () => {
  return (
        <div className="container   " >
            <div className="row px-2 py-4" style={{color:'#FF6347'}}>

                <div className="col d-flex " >
                    <div className='px-1'>
                    <LiaShippingFastSolid size={'2rem'}/> 

                    </div>
                    <div>
                    <span style={{fontSize:'0.8rem',fontWeight:'500'}}>Free shipping</span>
                    <p className='d-none d-sm-block' style={{fontSize:'0.7rem',fontWeight:'100'}}>Free shipping for all orders</p>
                    </div>
                </div>

                <div className="col d-flex ">
                    <div className='px-1'>
                    <IoMdCash size={'2rem'}/>

                    </div>
                    <div>
                    <span style={{fontSize:'0.8rem',fontWeight:'500'}}>Cash On Delivery</span>
                    <p className='d-none d-sm-block' style={{fontSize:'0.7rem',fontWeight:'100'}}>Cash On Delivery available</p>
                    </div>

                </div>

                <div className="col d-flex ">
                    <div className='px-1'>
                    <TfiHeadphoneAlt size={'2rem'}/> 

                    </div>
                    <div>
                    <span style={{fontSize:'0.8rem',fontWeight:'500'}}>Online Assistance</span>
                    <p className='d-none d-sm-block' style={{fontSize:'0.7rem',fontWeight:'100'}}>24/7 Online Assistance available</p>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default Features