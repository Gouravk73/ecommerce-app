import React from 'react'
import img from  '../../data/Category/duffleBag.jpg'
import { useNavigate } from 'react-router-dom'
const Category = () => {
  const navigate=useNavigate();
  const buttonHandler=()=>{
    navigate('/shop')
  }
  return (
    <div className="container" >
         <div className='row d-flex justify-content-center text-center'>
            <div className="position-relative" >
              <img src={img } alt='category' style={{ maxWidth: '100%' }} />
       

              <div id='hotdeal' className="col position-absolute top-50 start-50 translate-middle " style={{ backgroundColor:'white' ,  }}>
                <p className='py-2' style={{fontWeight:'100',fontSize:'0.8rem'}}>UP TO 15% OFF</p>
                <h3>Discover Your Perfect Bag</h3>
                <button onClick={buttonHandler} className='btn m-2 px-3 py-2' style={{ backgroundColor:'orange',color:'white'}}>Shop Now</button>
                <button onClick={buttonHandler} className='btn m-2 px-3 py-2' style={{border:'1px solid orange',color:'orange'}}>View Details</button>
              </div>
              
            </div>
          </div>
      </div>
  )
}

export default Category