import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className="container px-0">
            <div className="row py-5 " style={{borderTop:'1px solid grey',}}>

                <div className="col-md-6 mb-6 col-12">
                    <h3 style={{padding:'5px',color:'grey'}}>@ 2023 all rights reserved </h3>
                </div>
                <div className="col-md-6 mb-6 col-12">
                    
                    <Link style={{padding:'5px',color:'grey'}}>  FAQ</Link>
                    <Link to={'/shop'} style={{padding:'5px',color:'grey'}}>Shop</Link>
                    <Link style={{padding:'5px',color:'grey'}}>Shipping & Returns</Link>
                    <Link style={{padding:'5px',color:'grey'}}>Terms & Conditions</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer