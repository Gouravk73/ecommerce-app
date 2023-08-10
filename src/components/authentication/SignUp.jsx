import React, { useRef, useState } from 'react'
import{FiAlertCircle} from 'react-icons/fi'
import { SignUpUser } from '../../api/authentication/signUp'
import {Link,useNavigate } from 'react-router-dom'

const SignUp = () => {
    const inputEmail =useRef(null)
    const navigate=useNavigate();
    const inputPassword =useRef(null)
    const inputConfirmPassword =useRef(null)
    const[isLoading,setIsLoading] = useState(false);
    const[passwordError,setPasswordError]=useState(false);
    const[emailError,setEmailError]=useState(false);
    const [errorText,setErrorText]=useState("");

    const submitHandler =async(e)=>{
        e.preventDefault();
        setEmailError(false);
        setPasswordError(false);
        setIsLoading(true);

        const email=inputEmail.current.value;
        const password=inputPassword.current.value;
        const confirmPassword=inputConfirmPassword.current.value;

        if(password!==confirmPassword){
            setPasswordError(true);
            setErrorText("Passwords do not match");
            setIsLoading(false);
            return
        }

        try{
            const res=await SignUpUser(email,password)
            navigate('/login')
            console.log(res)
        } catch(e){
            setEmailError(true);
            setPasswordError(false);
            setErrorText(e.message.split('_').join(' '))
            setIsLoading(false);
            return;
       }

        setEmailError(false)
        setPasswordError(false);
        setIsLoading(false);
        setErrorText('')
    }

  return (
    <div>
        <div className="container d-flex flex-column justify-content-center  vh-100" style={{maxWidth:'500px'}}>
            <div style={{borderRadius:'1rem', boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.5)',padding:'2rem '}}>
                <form action="" onSubmit={submitHandler}>
                    <h5>Sign Up </h5>
                    {(emailError||passwordError)&&(
                        <div style={{color:'#FF0000',fontSize:'1rem',padding:'5px 0' }}>
                            <FiAlertCircle size={'1.2rem'}/> <span >{errorText}</span>
                        </div>
                        )}
                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            className={`form-control ${emailError?'is-invalid':' '} ` } 
                            id='email' 
                            placeholder='abc@gmail.com' 
                            ref={inputEmail} 
                            required
                            />
                        <label htmlFor="email" >Email</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className='form-control'
                            id='password'
                            placeholder='abc@gmail.com'
                            ref={inputPassword}
                            required
                            />
                        <label htmlFor="password" >Password</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className={`form-control ${passwordError?'is-invalid':' '} ` }
                            id='confirmPassword'
                            placeholder='abc@gmail.com'
                            ref={inputConfirmPassword}
                            required
                            />
                        <label htmlFor="confirmPassword" >Confirm Password</label>
                    </div>

                    {isLoading?
                            (
                                <button style={{width:'100%',background:'black'}} className='btn btn-secondary btn-block disabled'>
                                    Loading
                                </button>
                            ):(
                                <button style={{width:'100%',background:'black'}} className='btn btn-secondary btn-block'>
                                    Sing Up
                                </button>)}

                </form>
                <div className='d-flex justify-content-center' style={{margin:'2rem 0  0 0'}}>
            <Link to={'/login'} className='link-secondary link-underline-opacity-0 '> Already have an account? <span style={{color:'blue' ,fontWeight:700}}>Log In </span></Link>

            </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp