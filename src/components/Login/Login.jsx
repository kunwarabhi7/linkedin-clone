import React from 'react'
import Logo from '../../assests/Logo.png'
const Login = () => {
  return (
    <div className=' bg-gray-200 w-full h-fit'>
        <div className='w-40 ml-48 '>
<img  src={Logo} alt='linkedin logo'/>

        </div>
        <h1 className='text-center text-4xl'>Make the most of your professional life</h1>
    
    <form className='bg-white flex flex-col text-center w-60 mt-8 h-60 ml-[50%]' >
        <label>Email or phone number</label>
        <input  type="text" />
        <label>Password (6 or more characters)</label>
        <input type="password" />
    </form>

    </div>

  )
}

export default Login
