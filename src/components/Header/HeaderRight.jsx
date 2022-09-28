import React from 'react'

const HeaderRight = ({ Icon , title}) => {
  return (
    <div className='mx-3  text-gray-600 cursor-pointer'>
        {Icon && <Icon />}
        <h3 className='text-2xl'>{title}</h3>
    </div>
  )
}

export default HeaderRight