import React from 'react';
import Gl2 from '../assets/gl2.jpg';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView} from 'framer-motion';


const Tak = () => {
    const invitationRef = useRef(null);
  const invitationInView = useInView(invitationRef, { once: true });
  return (
        <section
        ref={invitationRef}
        className="relative flex justify-center items-center h-[400px] mt-10 max-w-[1400px] mx-auto"
      >
        <div className="w-[950px] rounded-l-4xl h-full bg-black opacity-90"></div>
        <img src={Gl2} alt="To'y taklifi rasmi" className="w-[450px] rounded-r-4xl h-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="text-center max-w-[700px]">
            <motion.p
              className="petit-formal-script-regular pb-11 text-white text-4xl"
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
                className={`text-white font-serif text-2xl ${index === 2 ? 'text-[50px] font-semibold pb-0' : 'pb-10'}`}
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