import React from 'react';
import Gl4 from '../assets/gl4.jpg';
import { motion } from 'framer-motion';

const Tadbir = () => {
  return (
    <section className='Timing'>
      <motion.div
        className=''
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className='petit-formal-script-regular sm:flex justify-center pt-[80px] sm:pt-[80px] text-center sm:pb-10 sm:pl-5 text-[45px] sm:text-[60px]'>
          To'y tadbiri vaqti
        </p>

        <div className='flex flex-col sm:flex-row px-14 items-center sm:items-start'>

          <div className='relative  sm:w-[510px] sm:h-[600px] mt-10 sm:mt-10 mx-auto sm:ml-[40px]'>
            <div className="absolute  inset-0 bg-gray-200 rounded-3xl -rotate-[7deg] scale-105 -z-10"></div>
            
            <img
              src={Gl4}
              alt="img"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Matn bloki */}
          <div className="w-[360px] sm:w-[450px] h-auto rounded-2xl flex flex-col justify-center items-center space-y-8 sm:space-y-10 mt-10 sm:mt-20">
            <p className='text-2xl sm:text-3xl text-center font-serif font-semibold p-4 sm:p-5'>
              Marxamat tadbir vaqtlari bilan tanishib chiqing
            </p>

            <div className="text-center font-serif">
              <p className="text-3xl font-semibold">07:00</p>
              <p className="text-base sm:text-2xl">Nahorgi osh</p>
            </div>

            <div className="text-center font-serif">
              <p className="text-3xl font-semibold">11:00</p>
              <p className="text-base sm:text-2xl">Ayollar bazmi</p>
            </div>

            <div className="text-center font-serif">
              <p className="text-3xl font-semibold">23:00</p>
              <p className="text-base sm:text-2xl">Bayram yakunlanishi...</p>
              <p className="text-base sm:text-2xl">...lekin yangi oilaviy hikoya boshlanishi...</p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Tadbir;
