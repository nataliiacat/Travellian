import React, { useState } from 'react'
import StarRating from '../StarRating/StarRating';
import { specialOffer } from '../../data'
import './SpecialOfferSection.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SpecialOfferSection = () => {
  const [currentIndex, setCurretIndex] = useState(0);
  const specialOfferPerPage = 3;
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
      setCurretIndex((prevIdex) => (prevIdex + 1) % specialOffer.length);
    }
    if (touchEndX - touchStartX > swipeThreshold) {
      setCurretIndex((prevIdex) =>
        prevIdex === 0 ? specialOffer.length - 1 : prevIdex - 1
      );
    }
  };
  const handleNext = () => {
    setCurretIndex((prevIdex) => (prevIdex + 1) % specialOffer.length);
  };
  const handlePrev = () => {
    setCurretIndex((prevIdex) =>
      prevIdex === 0 ? specialOffer.length - 1 : prevIdex - 1
    );
  };
  const getVisibleSpecialOffer = () => {
    const startIndex = currentIndex;
    const endIndex = (startIndex + specialOfferPerPage) % specialOffer.length;

    if (startIndex < endIndex) {
      return specialOffer.slice(startIndex, endIndex);
    } else {
      return [
        ...specialOffer.slice(startIndex),
        ...specialOffer.slice(0, endIndex),
      ];
    }
  };

  const visibleSpecialOffer = getVisibleSpecialOffer();
  return (
    <>
      <section id="specialOfferSection" className="specialOfferSection container" onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
        <div className="sliderContent">
          <div className="slider-btns">
            <button onClick={handlePrev} className="slider-btn prev-btn btn"><IoIosArrowBack className="icon" /></button>
            <button onClick={handleNext} className="slider-btn next-btn btn"><IoIosArrowForward className="icon" /></button></div>
          <div className="textDiv textSpecialOffer">
            <h1 className="title">Special Offer</h1>
            <p className="text">Check out our special offer and discounts</p>
          </div>
        </div>
        <div className="slider">
          <div className="slider-grid">
            {visibleSpecialOffer.map((specialOffer) => (
              <div key={specialOffer.id} className="specialOffer">
                <img
                  src={specialOffer.image}
                  alt={specialOffer.local}
                  className="specialOffer-img"
                />
                <div className="specialOfferContent">
                  <h3 className="subtitle localText">{specialOffer.local}</h3>
                  <StarRating rating={specialOffer.rating} />
                  <p className="text">{specialOffer.text}</p>
                  <div className="priceDiv">
                    <p className="subtitle priceText">From: <span className="price">{specialOffer.price}</span></p>
                    <button className="btn">Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}

export default SpecialOfferSection