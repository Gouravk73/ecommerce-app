import React, { useRef } from 'react'
import {FaFacebookSquare,FaTwitterSquare,} from 'react-icons/fa'
import {BiLogoPinterestAlt,BiLogoInstagram,} from 'react-icons/bi'
const Contact = () => {
  const nameInput=useRef();
  const emailInput=useRef();
  const numberInput=useRef();
  const textAreaInput=useRef();
  const submitHandler =(e)=>{
    e.preventDefault();
    nameInput.current.value = '';
    emailInput.current.value = '';
    numberInput.current.value = '';
    textAreaInput.current.value = '';
    alert('thank you :)')
  }
  return (
    <div className='container '>
      <div className="row py-5">
        <div className="col-md-6 mb-4 py-5 text-center" style={{backgroundColor:'#F6F4EB'}}>
          <div className="row d-flex justify-center align-center   py-4" style={{width:'200px',margin: ' 0 auto', borderRadius:'50%',backgroundColor:'#fff'}}>
          
          <h1   style={{transform:'rotate(-10deg)'}}>Bag</h1>
          <h1   style={{transform:'rotate(-10deg)'}}>Store</h1>
          </div>
            <h4 className='  my-4'> YOU CAN  <span>CONTACT </span> US DIRECTLY AT : </h4>
            <p>contact@bagstore</p>
            <span>Or you write us via contact form </span>
            <p>we answer as quick as possible </p>
            <div className="col " style={{marginTop:'50px'}}>
              <a href="https://facebook.com/" target='blank'>
              <FaFacebookSquare  style={{ fontSize: '24px',color:'black',margin: '0 10px',cursor:'pointer' }} />
              </a>
              <a href="https://instagram.com/" target='blank'>
              <BiLogoInstagram size={'2rem'} style={{ fontSize: '24px',color:'black',margin: '0 10px',cursor:'pointer' }} />
              </a>
              <a href="https://twitter.com/" target='blank'>
              <FaTwitterSquare size={'2rem'} style={{ fontSize: '24px',color:'black',margin: '0 10px',cursor:'pointer' }} />
              </a>
              <a href="https://pinterest.com/" target='blank'>
              <BiLogoPinterestAlt size={'2rem'} style={{ fontSize: '24px',color:'black',margin: '0 10px',cursor:'pointer' }} />
              </a>
            </div>
          </div>
        <div className="col-md-6 mb-4 py-5"  >
        <form action="" onSubmit={submitHandler}>
          <div className="form-floating mb-4 ">
            <input type="text" className="form-control" placeholder="" ref={nameInput} required/>
            <label >Name</label>
          </div>
          <div className="form-floating mb-4  ">
            <input type="email" className="form-control" placeholder="" ref={emailInput} required/>
            <label >Email</label>
          </div>
          <div className="form-floating  mb-4 ">
            <input type="number" className="form-control" placeholder="" ref={numberInput} required/>
            <label >Contact Number</label>
          </div>
          <div className="input-group mb-4">
            <textarea className="form-control" rows="10" placeholder='Type your message here' ref={textAreaInput}  required>
            </textarea>
          </div>
          <div className='col my-3'>
        <button className='btn btn-danger m-2 px-5 py-2' style={{ opacity:'0.8'}}>send</button>

          </div>
        </form>
        </div>
      </div>
    </div >
  )
}

export default Contact