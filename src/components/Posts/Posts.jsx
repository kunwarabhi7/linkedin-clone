import React from 'react'
import { FcBusinessman } from 'react-icons/fc'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { IoMdShareAlt } from 'react-icons/io'
import { FiSend } from 'react-icons/fi'

import FeedInput from '../Feed/FeedInput'

const Posts = ({name , description , message , photoUrl}) => {
  return (
    <div className=''>
    <div className='flex mb-3'>

    <FcBusinessman  className=' rounded-full bg-orange-400'  />
    <div className='ml-3'>
        <h2 className='text-[15px]'>
            {name}
        </h2>
        <p className='text-gray-600 text-[12px]'>{description}</p>
    </div>
    </div>
    <div className='break-all	'>
        <p>{message}</p>
    </div>
    <div className='flex justify-evenly mt-2'>
    <FeedInput Icon={AiOutlineLike} title='Like' color='gray'  />
    <FeedInput Icon={FaRegCommentDots} title='Comment' color='gray' />
    <FeedInput Icon={IoMdShareAlt} title='Share' color='gray' />
    <FeedInput Icon={FiSend} title='send' color='gray' />
    </div>
    </div>
  )
}

export default Posts
