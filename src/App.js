
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Services from './components/pages/Services';
import Sitemap from './components/pages/Sitemap';
import Login from './components/pages/Login';
import Contactus from './components/pages/Contactus';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/services' element={<Services />} />
        <Route path='/site-map' element={<Sitemap />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contactus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
