import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Vaqt from './components/vaqt';
import Tak from './components/tak';
import Manzil from './components/manzil';
import Tadbir from './components/tadbir';
import Visits from './components/visits';
import Contact from './components/contact';
import Footer from './components/footer';

import VictorsList from '../src/components/page/VisitorsList';

function Hearts() {
  useEffect(() => {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.pointerEvents = "none";
    container.style.overflow = "visible";
    container.style.zIndex = "-1";
    document.body.appendChild(container);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes fall {
        to {
          transform: translate(calc(var(--x-move, 0) * 1vw), 110vh);
          opacity: 0.2;
        }
      }
    `;
    document.head.appendChild(style);

    function createRing() {
      const ring = document.createElement("div");
      ring.style.position = "absolute";
      ring.style.top = "-50px";

      // Tasodifiy horizontal boshlang'ich joylashuv (vw)
      const startX = Math.random() * 100;
      ring.style.left = startX + "vw";

      // Opacity 0.01 dan 0.02 gacha
      const opacity = 0.01 + Math.random() * 0.02;
      ring.style.opacity = opacity;

      // Tasodifiy o'lcham 24px dan 48px gacha
      const size = 24 + Math.random() * 24;
      ring.style.width = size + "px";
      ring.style.height = size + "px";

      // SVG bilan ikki bog'langan uzuk
      ring.innerHTML = `
        <svg 
          viewBox="0 0 64 64" 
          width="${size}" 
          height="${size}" 
          fill="none" 
          stroke="#ff4d6d" 
          stroke-width="2" 
          stroke-linejoin="round" 
          stroke-linecap="round"
        >
          <circle cx="24" cy="32" r="20" />
          <circle cx="40" cy="32" r="20" />
        </svg>
      `;

      ring.style.userSelect = "none";
      ring.style.pointerEvents = "none";

      // Animatsiya davomiyligi 5-10 soniya orasida
      const duration = 5 + Math.random() * 5;

      // Yon harakat uchun tasodifiy x-move: -10 dan +10 gacha vw birlikda
      const xMove = (Math.random() * 20) - 10;
      ring.style.setProperty("--x-move", xMove);

      ring.style.animation = `fall ${duration}s linear forwards`;

      container.appendChild(ring);

      ring.addEventListener("animationend", () => {
        ring.remove();
      });
    }

    const interval = setInterval(createRing, 700);

    return () => {
      clearInterval(interval);
      container.remove();
      style.remove();
    };
  }, []);

  return null;
}

export default function App() {
  const audioRef = useRef(null);

  return (
    <Router>
      <Hearts />
      <div className="container mx-auto sm:px-6 lg:px-36">
        <audio ref={audioRef} src="/Fly.mp3" loop playsInline autoPlay />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Vaqt />
                <Tak />
                <Manzil />
                <Tadbir />
                <Visits />
                <Contact />
              </>
            }
          />
          <Route path="/page" element={<VictorsList />} />
          {/* Boshqa sahifalar uchun routelar */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
