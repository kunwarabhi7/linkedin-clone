import React from 'react'
import { BsLinkedin , BsSearch} from "react-icons/bs";


import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>Header</h1>
    <div className="header__left">
      <BsLinkedin />
      <div className='header__search'>
        <BsSearch />
        <input type="text" />
      </div>
      
    </div>
    <div className="header__right"></div>
    </div>
  )
}

export default Header