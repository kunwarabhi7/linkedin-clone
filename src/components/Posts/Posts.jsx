import React from 'react'
import { FcBusinessman } from 'react-icons/fc'

const Posts = ({name , description , message , photoUrl}) => {
  return (
    <div className=''>
    <div className='flex'>

    <FcBusinessman  className=' rounded-full bg-orange-400'  />
    <div>
        <h2>
            {name}
        </h2>
        <p>{description}</p>
    </div>
    </div>
    <div>
        <p>{message}</p>
    </div>
    </div>
  )
}

export default Posts
