import React from 'react'
import { FcBusinessman } from 'react-icons/fc'

const Feed = () => {
  return (
    <div className=' basis-3/5'>
      <div className='flex border-4 h-36 p-4 m-8 bg-white'><FcBusinessman  className='ml-1 mr-[150px] mb-[10px] cursor-pointer w-20 h-20 rounded-full bg-orange-400'  />
    <input className='rounded-full cursor-pointer outline hover:bg-gray-600 border-solid border-gray-300 w-[340px] p-8 h-4 -ml-10' placeholder='Post a picture from school or work' />
      </div>
    </div>
  )
}

export default Feed
