import React from 'react'
import { FcBusinessman } from 'react-icons/fc';


const SideBar = () => {
  return (
    <div className='border-r-4  '>
      <div className='mt-10  '>
        <img className='w-40 h-20 ' src="https://media-exp1.licdn.com/dms/image/C4D16AQEFTpO_2J7_jw/profile-displaybackgroundimage-shrink_200_800/0/1650526601581?e=1669852800&v=beta&t=tzD-Td80RgTkgKf6xaTGQpZZnkg0Zv_3nuT3_0_-N9w" alt="/" />
        <FcBusinessman  className='ml-[50px] w-20 h-20 rounded-full bg-orange-400'  />
        <h2 className='cursor-pointer'>Abhishek Parmar</h2>
        <h4>Front End Web Devloper</h4>
      </div>
      <div>
        <h2>Who's viewed your profile <span className='text-blue-700 font-bold'>552</span></h2>
        <h2>Impressions of your posts <span className='text-blue-700 font-bold'>177 </span></h2>
      </div>
    </div>
  )
}

export default SideBar
