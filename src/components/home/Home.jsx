import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import img1 from '../../assets/Home/HomeImage1.jpg'
import img2 from '../../assets/Home/HomeImage2.jpg'
import img3 from '../../assets/Home/HomeImage3.jpg'
import Features from './Features';
import BagType from './BagType';
import Category from './Category';
import TopDeals from './TopDeals';
 const Home = () => {
  

  return (
    <>
      <div className='container' >
       <Carousel fade>
          <Carousel.Item>
          <img 
            className="  w-100 h-100"
             src={img1}alt="" />

            <Carousel.Caption style={{color:'#808080'}}>
              <h1 >Unleash Your Style</h1>
              <h6>Find the perfect bag that expresses your personality and completes your outfit.</h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img 
              className="  w-100 h-100"
              src={img2}
              alt="" 
              />
            <Carousel.Caption >
              <h1>Discover Stylish Bags</h1>
              <h6>Explore our collection of trendy and high-quality bags designed to complement your style.</h6>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img 
                className="  w-100 h-100"
                src={img3}alt="" />
            <Carousel.Caption>
                <h1>PLAN YOUR ADVENTURE</h1>
                <h6>Find the perfect bag that expresses your personality and completes your outfit.</h6>
            </Carousel.Caption>
          </Carousel.Item>

       </Carousel>
       </div>
       <Features/>
       <BagType/>
       <Category/>
       <TopDeals/>
       </>
  );
}

export default Home