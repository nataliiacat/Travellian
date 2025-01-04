import React from 'react';
import './assets/styles/global.css'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import DestinationsSection from './components/DestinationsSection/DestinationsSection';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <DestinationsSection />
      <Footer />
    </>
  )
}

export default App
