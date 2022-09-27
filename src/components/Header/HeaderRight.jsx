import React from 'react'

const HeaderRight = ({Icon , title}) => {
  return (
    <div className='mx-3'>
        {Icon && <Icon />}
        <h3>{title}</h3>
    </div>
  )
}

export default HeaderRight