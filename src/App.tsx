import React from 'react';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Footer from './components/footer/Footer';
import Sobre from './pages/sobre/Sobre';
import Contato from './pages/contato/Contato'

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/Contato" element={<Contato />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </div>
         <Footer />
        </BrowserRouter>
       
    </>
  );
}

export default App;

