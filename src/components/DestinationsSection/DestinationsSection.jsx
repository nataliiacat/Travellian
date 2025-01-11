import React, { useState } from 'react'
import { destinations } from '../../data'
import './DestinationsSection.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const DestinationsSection = () => {
  const [currentIndex, setCurretIndex] = useState(0);
  const destinationsPerPage = 3;
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
      setCurretIndex((prevIdex) => (prevIdex + 1) % destinations.length);
    }
    if (touchEndX - touchStartX > swipeThreshold) {
      setCurretIndex((prevIdex) =>
        prevIdex === 0 ? destinations.length - 1 : prevIdex - 1
      ); 
    }
  };
  const handleNext = () => {
    setCurretIndex((prevIdex) => (prevIdex + 1) % destinations.length);
  };
  const handlePrev = () => {
    setCurretIndex((prevIdex) =>
      prevIdex === 0 ? destinations.length - 1 : prevIdex - 1
    );
  };
  const getVisibleDestinations = () => {
    const startIndex = currentIndex;
    const endIndex = (startIndex + destinationsPerPage) % destinations.length;

    if (startIndex < endIndex) {
      return destinations.slice(startIndex, endIndex);
    } else {
      return [
        ...destinations.slice(startIndex),
        ...destinations.slice(0, endIndex),
      ];
    }
  };

  const visibleDestinations = getVisibleDestinations();
  return (
    <>
      <section id="destinationsSection" className="destinationsSection container" onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
        <div className="sliderContent">
          <div className="textDiv">
            <h1 className="title">Popular Destinations</h1>
            <p className="text">Most popular destinations around the world, from historical places to natural wonders.</p>
          </div>
          <div className="slider-btns">
            <button onClick={handlePrev} className="slider-btn prev-btn btn"><IoIosArrowBack className="icon"/></button>
            <button onClick={handleNext} className="slider-btn next-btn btn"><IoIosArrowForward className="icon"/></button>
          </div>
        </div>
        <div className="slider">
          <div className="slider-grid">
            {visibleDestinations.map((destinations) => (
              <div key={destinations.id} className="destinations slide" >
                <img
                  src={destinations.image}
                  alt={destinations.title}
                  className="destinations-img"
                />
                <div className="destinationsLocalContent">
                  <h3 className="subtitle">{destinations.title}</h3>
                  <p className="text destinationsLocal"><IoLocation  className="icon"/>{destinations.local}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DestinationsSection
