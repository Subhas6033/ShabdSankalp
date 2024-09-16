import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import Doctor from '../img/Doctor.jpg';

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

      {/* Render the Doctors Component */}
      <Doctors />
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
          />
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

// Doctors component for the Home page

const doctorsList = [
  { name: "Dr. Subhas Mondal", specialty: "Cardiology", image: Doctor },
  { name: "Dr. Subhojit Kundu", specialty: "Dermatology", image: Doctor },
  { name: "Dr. Rajib Pandit", specialty: "Neurology", image: Doctor },
  { name: "Dr. Prabir Santra", specialty: "Psychiatry", image: Doctor },
  { name: "Dr. Rakesh Santra", specialty: "Dental", image: Doctor },
  { name: "Dr. Anwesha Dey", specialty: "Gastroenterology", image: Doctor },
  { name: "Dr. Pritam Kundu", specialty: "Orthopedics", image: Doctor },
  { name: "Dr. Raja Dey", specialty: "Oncology", image: Doctor },
  { name: "Dr. Suman Nayak", specialty: "Neurosurgery", image: Doctor },
  { name: "Dr. Sumit Ghosh", specialty: "Cardiothoracic Surgery", image: Doctor },
  // { name: "Dr. Intekhab Alam", specialty: "Pulmonary Medicine", image: Doctor },
  // { name: "Dr. Sudarshana Bhattacharaya", specialty: "General Surgery", image: Doctor },
];
const Doctors = () => {
  const doctorGridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply the show-grid class to make the grid visible
            entry.target.classList.add('show-grid');

            // Add left and right animations to the cards
            const doctorCards = entry.target.querySelectorAll('.doctor-card');
            doctorCards.forEach((card, index) => {
              // Apply animation based on card index
              if (index % 2 === 0) {
                card.classList.add('left-card'); // Animate from left
              } else {
                card.classList.add('right-card'); // Animate from right
              }
            });
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (doctorGridRef.current) {
      observer.observe(doctorGridRef.current);
    }

    return () => {
      if (doctorGridRef.current) {
        observer.unobserve(doctorGridRef.current);
      }
    };
  }, []);

  return (
    <div className="doctors">
      <h2>Our Doctors</h2>
      <div className="doctor-grid" ref={doctorGridRef}>
        {doctorsList.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
          </div>
        ))}
      </div>
      {/* More Doctors button */}
      <button className="more-doctors-btn"><Link to = 'shabdsankalp/doctors'>More Doctors</Link></button>
       {/* Latter We will decide if we route this path or not... */}
    </div>
  );
};
