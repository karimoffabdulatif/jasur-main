import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Vaqt = () => {
  const countdownRef = useRef(null);
  const countdownInView = useInView(countdownRef, { once: true });

  const calculateTimeLeft = () => {
    const difference = +new Date('2025-06-29T00:00:00') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <motion.section
      ref={countdownRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={countdownInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="pt-14 pb-10 max-w-[1400px] mx-auto sm:px-4"
    >
      <p className="petit-formal-script-regular flex justify-center text-center text-[30px] sm:text-[60px] text-black">
        To'ygacha qolgan vaqt
      </p>

      <div className="flex justify-center gap-10 pt-8 text-black text-4xl font-mono">
        {['Kun', 'Soat', 'Minut', 'Sekund'].map((label, idx) => {
          const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][idx];
          const padded = value.toString().padStart(2, '0');
          return (
            <motion.div
              key={label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={countdownInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
            >
              <div>{padded}</div>
              <div className="text-lg font-serif">{label}</div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Vaqt;
