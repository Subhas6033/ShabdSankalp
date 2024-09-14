
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
        <Route path='/shabdsankalp' element={<Home />} />
        <Route path='shabdsankalp/about' element={<Aboutus />} />
        <Route path='shabdsankalp/services' element={<Services />} />
        <Route path='shabdsankalp/sitemap' element={<Sitemap />} />
        <Route path='shabdsankalp/login' element={<Login />} />
        <Route path='shabdsankalp/contact' element={<Contactus />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
