import React, { useRef } from 'react'

const SignUp = () => {
    const inputEmail =useRef(null)
    const inputPassword =useRef(null)
    const inputConfirmPassword =useRef(null)

    const submitHandler =(e)=>{
        e.preventDefault();
        const email=inputEmail.current.value;
        const password=inputPassword.current.value;
        const confirmPassword=inputConfirmPassword.current.value;
        const id={
            email,
            password,
            confirmPassword,
        }
        console.log(id)
        
    }

  return (
    <div>
        <div className="container d-flex flex-column justify-content-center  vh-100" style={{maxWidth:'500px'}}>
            <div>
                <form action="" onSubmit={submitHandler}>
                    <div className="form-floating mb-3">
                        <input type="email" className='form-control' id='email' placeholder='abc@gmail.com' ref={inputEmail} required/>
                        <label htmlFor="email" >Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className='form-control' id='password' placeholder='abc@gmail.com' ref={inputPassword} required />
                        <label htmlFor="password" >Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className='form-control' id='confirmPassword' placeholder='abc@gmail.com'ref={inputConfirmPassword} required/>
                        <label htmlFor="confirmPassword" >Confirm Password</label>
                    </div>
                <button style={{width:'100%',background:'black'}} className='btn btn-secondary btn-block'>login</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp