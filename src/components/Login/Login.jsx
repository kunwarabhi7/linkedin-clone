import React from 'react'
import Logo from '../../assests/Logo.png'
const Login = () => {
  return (
    <div className='grid'>
        <div className='w-40 ml-48 '>
<img  src={Logo} alt='linkedin logo'/>

        </div>
        <div><h1>Make the most of your professional life</h1></div>
    <div className='bg-white flex flex-row'>
    <form>
        <label>Email or phone number</label>
        <input  type="text" />
        <label>Password (6 or more characters)</label>
        <input type="password" />
    </form>

    </div>

    </div>
  )
}

export default Login
