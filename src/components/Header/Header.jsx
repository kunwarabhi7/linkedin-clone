import React from 'react'
import { BsLinkedin , BsSearch,BsChatDotsFill} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { IoBagRemoveSharp } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { UserAuth } from '../../contex/AuthContex';

import HeaderRight from './HeaderRight';
import { auth } from '../../utils/firebase/firebase';




const Header = () => {
  const {logout} = UserAuth()

  const signOutUser = async() =>{
await logout(auth)
console.log('User Is SignOut')
  }

  return (
    <div className='flex sticky top-4  left-10 border-b-2 bg-white'>

    <div className="flex max-w-20">
      <BsLinkedin className='w-[50px] h-12 cursor-pointer mt-2 ml-14  text-blue-700' />
      <div className='flex  ml-4 mt-3 mb-1 bg-[#eef3f8]'>
        <BsSearch className='ml-2 mt-3' />
        <input className=' bg-[#eef3f8] mt-2 h-6 max-w-[200px] ml-4 mr-20 outline-none hover:w-full' type="text"  placeholder='Search'/>
      </div>
      
    </div>
    <div className="flex ml-40 mt-2 text-xl  ">
<HeaderRight className='m-2'  title='Home' Icon={AiFillHome } />
<HeaderRight title='My Network' Icon={HiUsers } />
<HeaderRight title='Jobs' Icon={IoBagRemoveSharp } />
<HeaderRight title='Messaging' Icon={BsChatDotsFill } />
<HeaderRight title='Notifications' Icon={MdNotifications } />
<HeaderRight title='Me'  Icon={FcBusinessman} />
<HeaderRight title='Work' Icon={GiHamburgerMenu} />
<button onClick={signOutUser}>
  
<HeaderRight title='SignOut' Icon={FaSignOutAlt} />
</button>

    </div>
    </div>
  )
}

export default Header