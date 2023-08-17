import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { loginSliceActions } from '../../store/login-slice';
import {authenticateUser} from '../../api/authentication/login';
import { useState } from 'react';
import{FiAlertCircle} from 'react-icons/fi'
import {Link,useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const inputEmail=useRef('');
    const inputPassword=useRef('');
    const dispatch=useDispatch();
    const[isLoading,setIsLoading] = useState(false);
    const[emailError, setEmailError]=useState(false);
    const[passwordError,setPasswordError]=useState(false);
    const[errorText,setErrorText]=useState('')

    const submitHandler=async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        const email=inputEmail.current.value;
        const password=inputPassword.current.value;
        console.log("email",email,'password',password);
        try{
            const data=await authenticateUser(email,password);
            dispatch(loginSliceActions.loginSuccess({
                            idToken:data.idToken,
                            email:data.email
                        }));
            navigate('/')

        }
        catch(e){
            let err=e.message;
            err=err.split('_').join(' ')
            setErrorText(err);
            if(e.message==='EMAIL_NOT_FOUND'){
                setPasswordError(false);
                setEmailError(true);
                setIsLoading(false);

            return
            }
            else if (e.message==='INVALID_PASSWORD'){
                setPasswordError(true);
                setEmailError(false);
                setIsLoading(false);

            return
            }
        }
        setPasswordError(false);
        setEmailError(false);
        setIsLoading(false);
    }
  return (
        <div className="container d-flex flex-column justify-content-center  vh-100" style={{maxWidth:'500px'}} >
            <div style={{border:'1px solid black',boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.5)'}}>
                <p>Gmail : abc@gmail.com</p>
                <p>Gmail : password</p>
            </div>
            <div style={{borderRadius:'1rem', boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.5)',padding:'2rem '}}>
            <form action="" onSubmit={submitHandler}>
            <h6 >LOGIN TO YOUR ACCOUNT</h6>
            {(emailError||passwordError)&&(<div style={{color:'#FF0000',fontSize:'1rem',padding:'5px 0'}}>
                        <FiAlertCircle size={'1.2rem'}/> <span >{errorText}</span></div>)}

                <div className='form-floating  mb-3'>
                    <input type="email"  className={`form-control  ${emailError?'is-invalid':''}`} id='email' placeholder='abc@gmail.com' ref={inputEmail} required/>
                    <label htmlFor="email">Email</label>
                </div>

                <div className='form-floating  mb-3'>
                    <input type="password"  className={`form-control ${passwordError?'is-invalid':''}`} id='password' placeholder='Abc123@' ref={inputPassword} required/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className='d-flex justify-content-end mb-3 ' >
                    <Link to={'/passwordreset'} className='link-secondary link-underline-opacity-0 '>Forget Password?</Link>
                </div>
                {
                    isLoading?
                        (<button style={{width:'100%',background:'black'}} className='btn btn-secondary btn-block disabled'>loading</button>):
                        (<button style={{width:'100%',background:'black'}} className='btn btn-secondary btn-block '>login</button>)}
            </form>
            <div className='d-flex justify-content-center' style={{margin:'2rem 0  0 0'}}>
            Don't have an account? &nbsp;
                <Link to={'/signup'} className='link-secondary link-underline-opacity-0 '>  <span style={{color:'blue' ,fontWeight:700}}> Sign up here</span></Link>

            </div>

        </div>
    </div>
  )
}

export default Login