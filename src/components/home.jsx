import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CgPlayButtonO, CgPlayPauseO } from 'react-icons/cg';
import Gl from '../assets/gl7.jpg';

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
      <audio ref={audioRef} src="/Fly_3.mp3" loop />
      <div className="bg-black sm:rounded-4xl sm:mt-8 mx-auto  sm:pb-18 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white pt-6 sm:pt-10 text-center font-serif sm:text-lg"
        >
          SANANI YODDA TUTING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="petit-formal-script-regular text-[25px] sm:text-[50px] flex justify-center pt-2 sm:pt-4 text-white"
        >
          Jasurbek & Muxlisaxon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white font-serif text-[22px] sm:text-2xl flex justify-center"
        >
          Iyun 29, 2025
        </motion.p>

          <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex text-white font-serif text-[18px] sm:text-[25px] sm:pt-4 justify-center"
        >
          Andijon, Qo'rg'ontepa
        </motion.p>

        {/* Rasm konteyneri */}
      <div className='relative'>
  <div className="sm:flex sm:justify-center sm:pb-5 sm:pt-6">
    <motion.img
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 2,         // Sekinroq chiqishi uchun
    delay: 1,
    ease: 'easeInOut'    // Silliq chiqish uchun
  }}
  src={Gl}
  alt="To'y rasmi"
  className="w-full h-screen object-cover sm:h-auto sm:w-[300px] border border-white"
/>
  </div>

  <div
    className={`
      absolute 
      bottom-12 left-1/2 -translate-x-1/2
       sm:translate-x-0 sm:bottom-auto sm:left-auto sm:pl-[568px] 
      flex justify-center items-center
    `}
  >
      <motion.button
  onClick={toggleAudio}
  aria-label={isPlaying ? 'Pause music' : 'Play music'}
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.2 }} // tugmani biroz keyinroq chiqishini istasak
>
  {isPlaying ? (
    <CgPlayPauseO className='text-white text-[70px] sm:text-[50px]' />
  ) : (
    <CgPlayButtonO className='text-white text-[70px] sm:text-[50px]' />
  )}
</motion.button>
  </div>
</div>

      </div>
    </section>
  );
};

export default Home;
