import React from 'react'
import { FcBusinessman } from 'react-icons/fc';
import { RiArrowUpSLine } from 'react-icons/ri';



const SideBar = () => {

    const recentItem = (topic) =>(
        <div className='flex text-[13px] mb-[5px] p-[5px] text-gray-500 hover:bg-gray-500 cursor-pointer font-bold hover:text-black '>
            <span className='mr-[10px] ml-[5px]' >#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='top-[80px ]   mt-4 sticky basis-1/5 border-r-[10px] text-center h-fit '>
      <div className='flex flex-col items-center border-gray-100 border-solid border-r-[1px] bg-white pb-[10px] border-[10px]  '>
        <img className='-mb-5 h-15 w-full rounded-xl object-cover' src="https://media-exp1.licdn.com/dms/image/C4D16AQEFTpO_2J7_jw/profile-displaybackgroundimage-shrink_200_800/0/1650526601581?e=1669852800&v=beta&t=tzD-Td80RgTkgKf6xaTGQpZZnkg0Zv_3nuT3_0_-N9w" alt="/" />
        <FcBusinessman  className='ml-[150px] mr-[150px] mb-[10px] cursor-pointer w-20 h-20 rounded-full bg-orange-400'  />
        <h2 className='cursor-pointer hover:underline'>Abhishek Parmar</h2>
        <h4 className='text-gray-400'>Front End Web Devloper</h4>
      </div>
      <div className='w-full border-8 p-2 ml-2 bg-white '>
        <h2>Who's viewed your profile <span className='text-blue-700 font-bold'>552</span></h2>
        <h2>Impressions of your posts <span className='text-blue-700 font-bold'>177 </span></h2>
      </div>
      <div className='text-left p-[10px] border-gray-300 border-solid bg-white mt-[10px] border-r-[10px] '>
        <div className='flex  group'>
            <p className=' font-[13px]  pb-[10px] cursor-pointer'>Recent</p>
            <RiArrowUpSLine className='right-4 ml-[300px] group-hover:visible  invisible' />
            </div>

        {recentItem('reactjs')}
        {recentItem('React Js & React Native Developer')}
        {recentItem('React JS, Angular, VueJS, Node.JS')}
        {recentItem('zerotomastery.io')}
        {recentItem('frontenddeveloper')}
        </div>
    </div>
  )
}

export default SideBar
