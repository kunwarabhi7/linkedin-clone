import React from 'react'
import { FcBusinessman } from 'react-icons/fc'
import { BsImages } from 'react-icons/bs'
import { RiVideoChatFill } from 'react-icons/ri'
import { IoBagRemoveSharp } from 'react-icons/io5'
import { IoCalendarSharp } from 'react-icons/io5'
import FeedInput from './FeedInput'
import Posts from '../Posts/Posts'

const Feed = () => {
  return (
    <div className=' basis-3/5 '>
      <div className='flex  border-4 h-44 p-4 m-8 bg-white'><FcBusinessman  className='ml-1 mr-[150px] mb-[10px] cursor-pointer w-20 h-20 rounded-full bg-orange-400'  />
    <form>
    <input className='rounded-full cursor-pointer outline hover:bg-gray-600 border-solid border-gray-300 w-[600px] p-8 h-4 -ml-10' placeholder='Post a picture from school or work' />
    <button className='hidden'>Send</button>
    </form>
      </div>
      <div className='flex flex-row justify-evenly mt-[-80px] cursor-pointer   '>
  <FeedInput title='Photo' color='blue' Icon={BsImages}/>
  <FeedInput title='Video' color='green' Icon={RiVideoChatFill}/>
  <FeedInput title='Job' color='purple' Icon={IoBagRemoveSharp}/>
  <FeedInput title='Write article' color='orange' Icon={IoCalendarSharp}/>
        </div>
        <Posts />
    </div>
  )
}

export default Feed
