import React from 'react';
import Gl2 from '../assets/gl2.jpg';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';


const Tak = () => {
  const invitationRef = useRef(null);
  const invitationInView = useInView(invitationRef, { once: true });
  return (
    <section
      ref={invitationRef}
      className="relative sm:flex px-[0.5px] justify-center items-center h-[400px] sm:mt-10  mx-auto"
    >
      <div className="sm:w-[950px] rounded-t-2xl sm:rounded-t-none sm:rounded-l-4xl h-full bg-black opacity-90"></div>

      <img
        src={Gl2}
        alt="To'y taklifi rasmi"
        className="w-full sm:w-[450px] h-full object-cover rounded-b-2xl sm:rounded-b-none sm:rounded-r-4xl"
      />


      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-center max-w-[700px] px-1">
          <motion.p
            className="petit-formal-script-regular pb-6  sm:pb-11 text-white text-[32px] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={invitationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Qadrli mehmonlarimiz!
          </motion.p>

          {[
            "Sizni to‘y tantanamizga taklif qilishdan mamnunmiz!",
            "Bu bizning oilalarimiz uchun juda muhim kun bo‘lib, uni biz uchun eng yaqin va qadrli insonlar bilan birga nishonlash juda muhimdir.",
            "28.06.2025"
          ].map((text, index) => (
            <motion.p
              key={index}
              className={`text-white font-serif pt-4 text-[18px] sm:text-2xl ${index === 2 ? 'pt-8 sm:pt-0 text-[35px] sm:text-[50px] font-semibold pb-0' : 'text-[18px]'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={invitationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.5, duration: 0.8 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tak