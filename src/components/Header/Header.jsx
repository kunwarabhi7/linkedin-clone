import React from 'react'
import { BsLinkedin , BsSearch} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineAccountBalance } from "react-icons/md";
import HeaderRight from './HeaderRight';




const Header = () => {
  return (
    <div className='flex sticky top-0 left-0'>
    <div className="flex max-w-20">
      <BsLinkedin className='w-8 h-8 cursor-pointer text-blue-700' />
      <div className='flex mt-2 ml-4'>
        <BsSearch className='' />
        <input className=' bg-[#eef3f8] ml-4 outline-none' type="text" />
      </div>
      
    </div>
    <div className="flex ml-4">
<HeaderRight className='m-2'  title='Home' Icon={AiFillHome } />
<HeaderRight title='Account' Icon={MdOutlineAccountBalance } />
    </div>
    </div>
  )
}

export default Header