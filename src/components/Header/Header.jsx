import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = ({ scrollToSection }) => {
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
              <a href="#heroSection" className="navLink" onClick={() => scrollToSection('heroSection')}>Home</a>
            </li>
            <li className="navItem">
              <a href="#destinationsSection" className="navLink" onClick={() => scrollToSection('destinationsSection')}>Explore</a>
            </li>
            <li className="navItem">
              <a href="#specialOfferSection" className="navLink" onClick={() => scrollToSection('specialOfferSection')}>Travel</a>
            </li>
            <li className="navItem">
              <a href="#blogSection" className="navLink" onClick={() => scrollToSection('blogSection')}>Blog</a>
            </li>
            <li className="navItem">
              <a href="#experiencesSection" className="navLink" onClick={() => scrollToSection('experiencesSection')}>Reviews</a>
            </li>
            <button className="btn">
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


