import React from 'react'
import Logo from '../assests/Logo.png'


const SignIn = () => {
    const signInButton = () => {

    }
  return (
    <div className=' w-full h-fit border-b-4'>
        <div className='w-40 h-40 ml-16 text-center'>
<img  src={Logo} alt='linkedin logo'/>

        </div>
    
    <form className='bg-white flex flex-col text-center w-[440px] mt-8 h-96 ml-[40%] p-2' >
        <h1 className='font-bold text-3xl  text-left'>Sign in</h1>
        <p className='text-left mt-2'>Stay updated on your professional world</p>
       
        <input placeholder='Email or Phone'  type="text" className=' p-2 m-8 border border-black mb-1 ' required  />
       
        <input type="password" placeholder='Password' className=' border p-2 m-8 border-black mb-2' required/>
<button type='submit' onClick={signInButton} className='bg-blue-600 text-white font-bold rounded-full w-96 h-16 ml-6 mt-6 hover:bg-blue-900'>Sign in</button>
    </form>
    <p className='mt-4 ml-24 mb-48 text-center text-2xl'>New to LinkedIn? <span className='text-blue-700 cursor-pointer'>Join now</span> </p>
    </div>

  )
}

export default SignIn
