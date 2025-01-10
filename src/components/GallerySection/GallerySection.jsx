import React, { useState } from 'react'
import { gallery } from '../../data'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './GallerySection.css'

const GallerySection = () => {
  const [currentIndex, setCurretIndex] = useState(0);
  const galleryPerPage = 4;
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
      setCurretIndex((prevIdex) => (prevIdex + 1) % gallery.length);
    }
    if (touchEndX - touchStartX > swipeThreshold) {
      setCurretIndex((prevIdex) =>
        prevIdex === 0 ? gallery.length - 1 : prevIdex - 1
      );
    }
  };
  const handleNext = () => {
    setCurretIndex((prevIdex) => (prevIdex + 1) % gallery.length);
  };
  const handlePrev = () => {
    setCurretIndex((prevIdex) =>
      prevIdex === 0 ? gallery.length - 1 : prevIdex - 1
    );
  };
  const getVisibleGallery = () => {
    const startIndex = currentIndex;
    const endIndex = (startIndex + galleryPerPage) % gallery.length;

    if (startIndex < endIndex) {
      return gallery.slice(startIndex, endIndex);
    } else {
      return [
        ...gallery.slice(startIndex),
        ...gallery.slice(0, endIndex),
      ];
    }
  };

  const visibleGallery = getVisibleGallery();
  return (
    <>
      <section className="GallerySection container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <div className="sliderContent">
          <div className="textDiv">
            <h1 className="title">Popular Destinations</h1>
            <p className="text">Most popular destinations around the world, from historical places to natural wonders.</p>
          </div>
          <div className="slider-btns">
            <button onClick={handlePrev} className="slider-btn prev-btn btn"><IoIosArrowBack className="icon" /></button>
            <button onClick={handleNext} className="slider-btn next-btn btn"><IoIosArrowForward className="icon" /></button>
          </div>
        </div>
        <div className="slider">
          <div className="slider-grid gallerySlider">
            {visibleGallery.map((gallery) => (
              <div key={gallery.id} className="gallery slide" >
                <img
                  src={gallery.image}
                  alt="image"
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GallerySection
