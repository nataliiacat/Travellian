import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const removeNavbar = () => {
    setActive('navBar')
  }
  return (
    <>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Explore</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Travel</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pricing</a>
            </li>
            <button className="btn form-popup">
              Login
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiOutlineClose className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <AiOutlineMenu className="icon" />
        </div>
      </header>
    </>
  )
}

export default Header


