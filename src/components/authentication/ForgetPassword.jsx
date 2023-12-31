import React from 'react'
import { useRef } from 'react';
import { ForgetUserPassword } from '../../api/authentication/forgetPassword';
import { useState } from 'react';
import{FiAlertCircle} from 'react-icons/fi'
import {MdAttachEmail} from'react-icons/md'
import{Link} from 'react-router-dom'
const ForgetPassword = () => {
    const inputEmail=useRef(null);
    const[isLoading,setLoading]=useState(false);
    const[emailError,setEmailError]=useState(false);
    const[emailErrorText,setEmailErrorText]=useState('');
    const[emailSuccess,setEmailSuccess]=useState(false);
    const submitHandler = async(e) => {
        e.preventDefault();
        setEmailError(false);
        setLoading(true);
        const email=inputEmail.current.value;
        console.log(email)
        try {
            const data=await ForgetUserPassword(email);
            console.log(data)
            setEmailSuccess(true);

        } catch (error) {
            console.log(error.message,'sas')
            setEmailSuccess(false);
            setEmailError(true);
            setLoading(false);
            setEmailErrorText(error.message.split('_').join(' '));
            return;
        }
        setLoading(false);
        inputEmail.current.value = '';
    }
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100 ' style={{maxWidth:'500px'}}>
        <div style={{borderRadius:'1rem', boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.5)',padding:'2rem '}}>
            <form action="" onSubmit={submitHandler}>
                <div className='col text-center' >
                    <h4>Forger Your Password</h4>
                    <p>To reset your password , enter the registered e-mail address
                        and we will send you password reset instructions on your e-mail
                    </p>
                </div>
                {emailSuccess&&
                    <div >
                        <MdAttachEmail color='green' size={'1.5rem'}  />
                        <span style={{color:'green',padding:'5px'}} >
                            Password reset link has been sent to your email. Please check your inbox.
                        </span>
                    </div>}
                {emailError&&(
                        <div style={{color:'#FF0000',fontSize:'1rem',padding:'5px 0'}}>
                            <FiAlertCircle size={'1.2rem'}/>
                            <span >{emailErrorText}
                            </span>
                        </div>)}

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        id='email'
                        className={`form-control ${emailError?'is-invalid':''}`}
                        placeholder='abc@gmail.com'
                        ref={inputEmail}
                         required/>
                    <label htmlFor="email">Email</label>
                </div>
                {
                    isLoading?(
                        <button style={{width:'100%',background:'black'}} className='btn btn-secondary btn-block disabled'>
                           Loading
                        </button>
                    ):(
                        <button style={{width:'100%',background:'black'}} className='btn btn-secondary btn-block '>
                            Reset Password
                        </button>
                )
                }

            </form>
            <div className='d-flex justify-content-center' style={{margin:'2rem  0 0 0'}}>
                <Link to={'/login'} className='link-secondary link-underline-opacity-0 '>
                    <span style={{color:'black' ,fontWeight:700}}>
                        Login In?
                    </span>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default ForgetPassword