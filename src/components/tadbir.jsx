import React from 'react';
import Gl4 from '../assets/gl4.jpg'
import { motion } from 'framer-motion';


const Tadbir = () => {
  return (
     <section className='Timing '>
        <motion.div
          className=''
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className='petit-formal-script-regular flex justify-center pb-10 pl-5 text-[60px]'>To'y tadbiri vaqti</p>
          <div className='flex gap-70'>
            <div className='relative w-[410px] mt-10 h-[620px] ml-[120px]'>
              <div className="absolute inset-0 bg-gray-200 rounded-3xl -rotate-[7deg] scale-105 -z-10"></div>
              <img
                src={Gl4}
                alt="img"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-[400px] h-auto  rounded-2xl flex flex-col justify-center items-center space-y-10">
              <p className='text-2xl text-center font-serif font-semibold p-5 '>Marxamat tadbir vaqtlari bilan tanishib chiqing</p>
              <div className="text-center font-serif">
                <p className="text-2xl font-semibold">18:00</p>
                <p className="text-base">Mehmonlarning yig‘ilishi</p>
              </div>
              <div className="text-center font-serif">
                <p className="text-2xl font-semibold">19:00</p>
                <p className="text-base">Tantana boshlanishi</p>
              </div>
              <div className="text-center font-serif">
                <p className="text-2xl font-semibold">23:00</p>
                <p className="text-base">Bayram yakunlanishi...</p>
                <p className="text-base">...lekin yangi oilaviy hikoya boshlanishi...</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
  )
}

export default Tadbir