import React from 'react'
import './HeroSection.css'
import hero_bg from '../../assets/images/hero_bg.png'
import { DatePicker } from 'antd'
import { IoIosArrowForward } from 'react-icons/io'

const { RangePicker } = DatePicker;


const HeroSection = () => {
  return (
    <>
      <section id="heroSection" className="heroSection">
        <div className="overlay"></div>
        <img className="heroBg" src={hero_bg} />
        <div className="heroContent container">
          <div className="textDiv">
            <h1 className="heroTitle title">Start your unforgettable <br />
              journey with us.</h1>
            <h3 className="heroSubtitle subtitle">The best travel for your jouney begins now</h3>
          </div>
          <div className="cardDiv grid">
            <div className="destinationInput input">
              <label className="text" htmlFor="city">
                Destination
              </label>
              <input type="text" id="city" placeholder="Enter name here..." />
            </div>
            <div className="numberInput input">
              <label className="text" htmlFor="number">
                Person
              </label>
              <input id="number" type="number"/>
            </div>
            <div className="datePickerDiv input">
              <label className="text" htmlFor="date-label">
                Book your stay
              </label>
              <RangePicker id="date-label" />
            </div>
            <div className="buttonDiv">
              <button className="btn flex btn_book">
                <h3 className="btn_text">BOOK NOW</h3>
                <IoIosArrowForward className="icon arrowIcon" />
              </button>
            </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default HeroSection
