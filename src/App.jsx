import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Vaqt from './components/vaqt';
import Tak from './components/tak';
import Manzil from './components/manzil';
import Tadbir from './components/tadbir';
import Visits from './components/visits';
import Contact from './components/contact';
import Footer from './components/footer';

import VictorsList from '../src/components/page/VisitorsList'


export default function App() {
  const audioRef = useRef(null);

  return (
    <Router>
<div className="container mx-auto  sm:px-6 lg:px-36">
        <audio ref={audioRef} src="/Fly_3.mp3" loop playsInline />
        
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Vaqt />
              <Tak />
              <Manzil />
              <Tadbir />
              <Visits />
              <Contact />
            </>
          } />
          <Route path="/page" element={<VictorsList />} />
          {/* Boshqa sahifalar uchun routelar */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
