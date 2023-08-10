import React from 'react'

const ForgetPassword = () => {
  return (
    <div className='container'>
        <div>
            <form action="">
                <div className="form-floating mb-3">
                    <input type="text" id='email' className='form-control' placeholder='abc@gmail.com' required/>
                    <label htmlFor="email">Email</label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ForgetPassword