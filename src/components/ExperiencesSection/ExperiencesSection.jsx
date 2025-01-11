import React, { useState } from 'react'
import StarRating from '../StarRating/StarRating'
import { experiences } from '../../data'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import './ExperiencesSection.css'

const ExperiencesSection = () => {
  const [currentIndex, setCurretIndex] = useState(0);
  const experiencesPerPage = 3;
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
      setCurretIndex((prevIdex) => (prevIdex + 1) % experiences.length);
    }
    if (touchEndX - touchStartX > swipeThreshold) {
      setCurretIndex((prevIdex) =>
        prevIdex === 0 ? experiences.length - 1 : prevIdex - 1
      );
    }
  };
  const handleNext = () => {
    setCurretIndex((prevIdex) => (prevIdex + 1) % experiences.length);
  };
  const handlePrev = () => {
    setCurretIndex((prevIdex) =>
      prevIdex === 0 ? experiences.length - 1 : prevIdex - 1
    );
  };
  const getVisibleExperiences = () => {
    const startIndex = currentIndex;
    const endIndex = (startIndex + experiencesPerPage) % experiences.length;

    if (startIndex < endIndex) {
      return experiences.slice(startIndex, endIndex);
    } else {
      return [
        ...experiences.slice(startIndex),
        ...experiences.slice(0, endIndex),
      ];
    }
  };

  const visibleExperiences = getVisibleExperiences();
  return (
    <>
      <section id="experiencesSection" className="ExperiencesSection container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <div className="textDiv">
          <h1 className="title">Traveler’s Experiences</h1>
          <p className="text">Here some awesome feedback from our travelers</p>
        </div>

        <div className="slider">
          <div className="slider-grid experiencesSlider">
            {visibleExperiences.map((experiences) => (
              <div key={experiences.id} className="experiences">
                <img
                  src={experiences.image}
                  alt={experiences.autor}
                  className="experiences-img"
                />
                <div className="experiencesContent">
                  <p className="text">{experiences.review}</p>
                  <StarRating rating={experiences.rating} />
                  <h3 className="subtitle">{experiences.autor}</h3>
                  <p className="text">{experiences.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-btns">
          <button onClick={handlePrev} className="slider-btn prev-btn btn"><IoIosArrowBack className="icon" /></button>
          <button onClick={handleNext} className="slider-btn next-btn btn"><IoIosArrowForward className="icon" /></button>
        </div>
      </section>

    </>
  )
}

export default ExperiencesSection
