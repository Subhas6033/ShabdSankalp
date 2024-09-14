import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimate(true);
  }, []);

  return (
    <div className={`home ${animate ? 'home-animation' : ''}`}>
      <div className="search-field">
        <input type="text" placeholder="Search Here" />
        <button>Search</button>
      </div>

      {/* Render the Slider Component */}
      <Slider />
    </div>
  );
}

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const slideInterval = useRef(null);

  // Function to move to the next slide
  const showNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Automatically move the slides every 3 seconds
  useEffect(() => {
    slideInterval.current = setInterval(showNextSlide, 3000);

    // Clean up the interval on unmount
    return () => clearInterval(slideInterval.current);
  }, []);

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index); // Set the slide based on dot click
    resetAutoSlide(); // Reset the auto-slide timer
  };

  // Function to reset the auto-slide timer when clicking on a dot
  const resetAutoSlide = () => {
    clearInterval(slideInterval.current); // Clear the existing interval
    slideInterval.current = setInterval(showNextSlide, 3000); // Set a new interval after clicking the dot
  };

  return (
    <div className="overview">
      {/* Slides Container */}
      <div className="slides-container">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease' }}>
          <div className="slide first-view">
            <h1>What we provide</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>

          <div className="slide second-view">
            <h1>Why Shabd Sankalp</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>

          <div className="slide third-view">
            <h1>Why we are different than others</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </div>

      {/* Dots to indicate current slide */}
      <div className="dots">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'active-dot' : 'dot'}
            onClick={() => handleDotClick(index)} // Add click event for dot
          >
            
          </span>
        ))}
      </div>

      {/* Show the button only on the last slide */}
      {currentSlide === totalSlides - 1 && (
        <button id="slider-button">
          <Link to="/shabdsankalp/about">
            About us <span>&#8594;</span>
          </Link>
        </button>
      )}
    </div>
  );
};
