import React from 'react'
import Features from '../home/Features'
import aboutImg from '../../assets/About/aboutus.avif'
const About = () => {
  return (
    <div className='container '>
      <div className="row">
        <div className="col-md-6">

        <h1 className='text-center '>About us</h1>
        <p style={{fontSize:'1.2rem'}}>At  <b>Bag Store,</b>  our mission is to redefine the way you experience bags. We believe that a bag is not just an accessory; it's an extension of your personality and a statement of your style. Our commitment is to craft and curate a collection of bags that seamlessly blend fashion, function, and durability.</p>
        <p style={{fontSize:'1.2rem'}}>We are passionate about bags in all their forms, from sleek and sophisticated to casual and carefree. Our mission is to provide you with a diverse range of high-quality bags that cater to your unique needs and preferences, whether you're a trendsetter, a practical traveler, a professional on-the-go, or an adventure enthusiast.
                                      Sustainability and ethics are at the core of our values. We are dedicated to sourcing eco-friendly materials and ensuring ethical practices throughout our supply chain. We believe in making responsible choices that not only enhance your bag experience but also contribute to a better world.</p>
                                      <div className="col d-flex justify-content-center align-items-center">
        <button className='btn m-2 px-3 py-2' style={{ backgroundColor:'orange',color:'white'}}>Shop Now</button>

        </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <img src={aboutImg} alt=""  style={{width:'100%'}}/>
        </div>
        
      </div>
      
      <div className="row py-5">
      

      <h1 className='text-center py-1 '>Features </h1>

        <Features  />
        
      </div>
    </div >
  )
}

export default About