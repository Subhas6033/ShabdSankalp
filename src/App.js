
import React, { useState } from "react";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Home, Aboutus, Services, Sitemap, Login, Contactus } from './components/pages';

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Navbar />
      </I18nextProvider>
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
