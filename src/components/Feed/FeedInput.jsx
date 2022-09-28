import React from 'react'

const FeedInput = ({title,Icon ,color}) => {
  return (
    <div className='w-fit h-fit flex hover:bg-gray-300 hover:w-20 '>
      <Icon className='w-7 h-7' style={{color:color}} />
      <h4 className='ml-4'>{title}</h4>
    </div>
  )
}

export default FeedInput
