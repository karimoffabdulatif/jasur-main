import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CgPlayButtonO, CgPlayPauseO } from 'react-icons/cg';
import Gl from '../assets/gl.jpg';  // Surat manzilingizga qarab o'zgartiring

const Home = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section>
      <audio ref={audioRef} src="/romantic.mp3" loop />
      <div className="bg-black rounded-4xl mt-8 max-w-[1400px] mx-auto pb-8 px-6">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white pt-10 text-center font-serif text-lg"
        >
          SANANI YODDA TUTING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="petit-formal-script-regular text-[50px] flex justify-center pt-4 text-white"
        >
          Jasurbek & Muxlisaxon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white font-serif text-2xl flex justify-center"
        >
          Iyun 28, 2025
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white font-serif flex justify-center text-[25px] pt-4"
        >
          Andijon, Qo'rg'ontepa
        </motion.p>

        <div className="flex justify-center pt-6">
          <img src={Gl} alt="To'y rasmi" className="w-[350px] h-auto bg-white p-1 rounded-lg" />
        </div>

        <div className="flex items-center justify-center pt-4 gap-6">
          <button onClick={toggleAudio} aria-label={isPlaying ? 'Pause music' : 'Play music'}>
            {isPlaying ? (
              <CgPlayPauseO className='text-white text-[70px]' />
            ) : (
              <CgPlayButtonO className='text-white text-[70px]' />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
