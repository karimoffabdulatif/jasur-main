import React, { useRef } from 'react';
import Home from './components/home';
import Vaqt from './components/vaqt';
import Tak from './components/tak';
import Manzil from './components/manzil';
import Tadbir from './components/tadbir';
import Visits from './components/visits';
import Contact from './components/contact';
import Footer from './components/footer';


export default function App() {
  const audioRef = useRef(null);
  return (
    <>
      <div className="container mx-auto px-36">
        <audio ref={audioRef} src="/romantic.mp3" loop />
        <Home />
        <Vaqt />
        <Tak />
        <Manzil />
        <Tadbir />
        <Visits />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
