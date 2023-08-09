import React, { useRef } from 'react'

const Login = () => {
    const inputEmail=useRef('');
    const inputPassword=useRef('');
    const submitHandler=(e)=>{
        e.preventDefault();
        const email=inputEmail.current.value;
        const password=inputPassword.current.value;
        console.log("email",email,'password',password);
    }
  return (
        <div className="container-fluid d-flex flex-column justify-content-center   vh-100" style={{backgroundColor:'#F6F4EB'}} >
            <div style={{border:'1px solid black',borderRadius:'10%', boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.5)',padding:'2rem ',backgroundColor:'white'}}>
            <form action="" onSubmit={submitHandler}>
            <h6>LOGIN TO YOUR ACCOUNT</h6>

                <div className='form-floating  mb-3'>
                    <input type="email"  className="form-control" id='email' placeholder='abc@gmail.com' ref={inputEmail} required/>
                    <label htmlFor="email">Email</label>
                </div>

                <div className='form-floating  mb-3'>
                    <input type="password"  className="form-control" id='password' placeholder='Abc123@' ref={inputPassword} required/>
                    <label htmlFor="password">Password</label>
                </div>
                <button style={{width:'100%',background:'black'}} className='btn btn-secondary btn-block'>login</button>

            </form>
            
        </div>
    </div>
  )
}

export default Login