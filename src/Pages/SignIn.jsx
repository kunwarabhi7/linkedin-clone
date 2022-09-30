import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {signInWithEmailAndPassword , signOut} from 'firebase/auth'
import { auth } from '../utils/firebase/firebase'
import SignUp from './SignUp'
import Logo from '../assests/Logo.png'


const SignIn = () => {
const [userEmail, setUserEmail] = useState('')
const [userPassword, setUserPassword] = useState('')
    const signInButton = async() => {
        try{
            await signInWithEmailAndPassword(auth,userEmail, userPassword)
            setUserEmail('')
        }catch(e){
            console.log(e.message)
        }

    }

    const signOutButton = async() => {
await signOut(auth)
    }

  return (
    <div className=' w-full h-fit border-b-4'>
        <div className='w-40 h-40 ml-16 text-center'>
<img  src={Logo} alt='linkedin logo'/>

        </div>
        <button onClick={signOutButton}>Sign Out</button>
    
    <form className='bg-white flex flex-col text-center w-[440px] mt-8 h-96 ml-[40%] p-2' >
        <h1 className='font-bold text-3xl  text-left'>Sign in</h1>
        <p className='text-left mt-2'>Stay updated on your professional world</p>
       
        <input onChange={e=>setUserEmail(e.target.value)} placeholder='Email or Phone'  type="text" className=' p-2 m-8 border border-black mb-1 ' required  />
       
        <input onChange={e=>setUserPassword(e.target.value)} type="password" placeholder='Password' className=' border p-2 m-8 border-black mb-2' required/>
<button type='submit' onClick={signInButton} className='bg-blue-600 text-white font-bold rounded-full w-96 h-16 ml-6 mt-6 hover:bg-blue-900'>Sign in</button>
    </form>
    <p className='mt-4 ml-24 mb-48 text-center text-2xl'>New to LinkedIn? 
    <Link to={<SignUp />}><span className='text-blue-700 cursor-pointer'>
        Join now</span></Link> 
    </p>
    </div>

  )
}

export default SignIn
