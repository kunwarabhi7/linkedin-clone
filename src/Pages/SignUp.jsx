import React from 'react'
import Logo from '../assests/Logo.png'

const SignUp = () => {

const signUpButton = (e) => {
  e.preventDefault()
}

  return (


    <div className=' bg-gray-200 w-full h-fit border-b-4'>
        <div className='w-40 h-40 ml-48 '>
<img  src={Logo} alt='linkedin logo'/>

        </div>
        <h1 className='text-center text-4xl ml-40'>Make the most of your professional life</h1>
    
    <form className='bg-white flex flex-col text-center w-[440px] mt-8 h-96 ml-[40%] p-10' >
        <label className='text-gray-500 text-left mb-2'>Email or phone number</label>
        <input  type="text" className=' border border-black mb-4 ' required  />
        <label className='text-gray-500 text-left mb-2'>Password (6 or more characters)</label>
        <input type="password"  className=' border border-black mb-2' required/>
<p className='mt-4 text-gray-500'>By clicking Agree & Join, you agree to the LinkedIn <span className='text-blue-400 cursor-pointer'> User Agreement, Privacy Policy</span>, and <span className='text-blue-400 cursor-pointer'>Cookie Policy</span>.</p>
<button type='submit' onClick={signUpButton} className='bg-blue-600 text-white font-bold rounded-full h-24 mt-6 hover:bg-blue-900'>Agree & Join</button>
    <p className='mt-4'>Already on LinkedIn? <span className='text-blue-700 cursor-pointer'>Sign in</span> </p>
    </form>
    </div>

  )
}

export default SignUp;
