import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.svg'
import { AiOutlineGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="newsletter">
          <h2>Our Newsletter</h2>
          <form className="newsletterForm">
            <input className="email-input" type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <button className="btn" type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footerContent">
          <div className="footerInner">
            <div className="logoDiv">
              <a href="#" className="logo">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <p className="text">Copyright © Travellian 2025 All rights reserved</p>
          </div>
          <div className="footerInners">
            <div className="footerItem">
              <h4 className="subtitle">Menu</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div className="footerItem">
              <h4 className="subtitle">Information</h4>
              <ul>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Supports</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
            <div className="footerItem">
              <h4 className="subtitle">Contact Info</h4>
              <ul>
                <li>
                  <a href="tel:+1123456789">+1 123 456 789</a>
                </li>
                <li>
                  <a href="mailto:info@travellian.com">info@travellian.com</a>
                </li>
                <li>
                  1234 New York, USA
                </li>
              </ul>
            </div>
          </div>
          <div className="footerInner">
            <h4 className="subtitle">Follow us on</h4>
            <ul className="social-link">
              <li><a href="#"><AiOutlineGithub className="icon" /></a></li>
              <li><a href="#"><AiFillLinkedin className="icon" /></a></li>
              <li><a href="#"><AiFillFacebook className="icon" /></a></li>
              <li><a href="#"><AiFillInstagram className="icon" /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer