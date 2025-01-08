import React, { useState } from 'react'
import { destinations } from '../../data'
import './DestinationsSection.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DestinationsSection = () => {
  const [currentIndex, setCurretIndex] = useState(0);
  const destinationsPerPage = 3;
  const handleNext = () => {
    setCurretIndex((prevIdex) => (prevIdex + 1) % destinations.length);
  };
  const handlePrev = () => {
    setCurretIndex((prevIdex) =>
      prevIdex === 0 ? destinations.length - 1 : prevIdex - 1
    );
  };
  const currentDestinations = destinations.slice(currentIndex, currentIndex + destinationsPerPage)

  return (
    <>
      <section className="destinationsSection container">
        <div className="destinationsContent">
          <div className="textDiv">
            <h1 className="title">Popular Destinations</h1>
            <p className="text">Most popular destinations around the world, from historical places to natural wonders.</p>
          </div>
          <div className="slider-btns">
            <button onClick={handlePrev} className="slider-btn prev-btn btn"><IoIosArrowBack /></button>
            <button onClick={handleNext} className="slider-btn next-btn btn"><IoIosArrowForward /></button>
          </div>
        </div>
        <div className="slider">
          <div className="slider-grid">
            {currentDestinations.map((destinations) => (
              <div key={destinations.id} className="destinations" >
                <img
                  src={destinations.image}
                  alt={destinations.title}
                  className="destinations-img"
                />
                <h3 className="subtitle">{destinations.title}</h3>
                <p className="text destinationsLocal">{destinations.local}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DestinationsSection
