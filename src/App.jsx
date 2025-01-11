import React from 'react';
import './assets/styles/global.css'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import DestinationsSection from './components/DestinationsSection/DestinationsSection';
import SpecialOfferSection from './components/SpecialOfferSection/SpecialOfferSection';
import BlogSection from './components/BlogSection/BlogSection';
import GallerySection from './components/GallerySection/GallerySection';
import ExperiencesSection from './components/ExperiencesSection/ExperiencesSection';
import Footer from './components/Footer/Footer';
function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <HeroSection id="heroSection" />
      <DestinationsSection id="destinationsSection" />
      <SpecialOfferSection id="specialOfferSection" />
      <BlogSection id="blogSection" />
      <GallerySection />
      <ExperiencesSection id="experiencesSection" />
      <Footer />
    </>
  )
}

export default App
