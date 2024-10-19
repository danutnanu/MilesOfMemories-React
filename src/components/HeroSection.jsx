import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  return (
    <div 
      className='hero-container w-100 border border-warning position-relative mt-3' 
      style={{ 
        height: '100vh', 
        backgroundImage: 'url("./logo2.png")', // Set the image as a background
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundPosition: 'center' // Center the image
      }}
    >
      <div className='hero-first m-5 p-5'>
        <p className='h3'>Developed by: Danut Nanu</p>
        <p className='h3'>Designed by: Danut Nanu</p>
        <p className='h3'>Runner: Danut Nanu</p>
      </div>

      <div className='hero-second text-center pt-5 m-5 mt-5'>
        <h1 className='text-warning h1 mt-5'>"EVERYTHING</h1>
        <p className='h1'>YOU WANTED TO KNOW ABOUT YOURSELF</p>
        <p className='h2'>YOU CAN LEARN IN</p>
        <p className='text-warning h1'>26.2 MILES"</p>
      </div>
    </div>
  );
}

export default HeroSection;
