import React from 'react';
import Gl3 from '../assets/toyx.jpg'
import { motion } from 'framer-motion';


const Manzil = () => {
  return (
      <section className='mx-auto flex gap-[130px] pt-26 pb-24'>
        <motion.div
          className='w-[500px]'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}  // 50% ko'rinishida trigger bo'ladi, faqat 1 marta
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p className='petit-formal-script-regular pb-10 pl-5 text-[70px]'>Manzil</p>
          <p className='font-serif pl-20 pb-3 text-2xl font-semibold'>Shohsaroy tantanalar saroyi</p>
          <p className='font-serif text-[20px] w-[520px] text-center'>
            Andijon, Qo'rg'ontepa tumani, Mustaqillik ko'chasi 72-uy. Mo'ljal: Qo'rg'ontepa Istirohat bo'g'i ro'parasi
          </p>

          <a
            href="https://yandex.uz/maps/org/102213153941/?ll=72.764301%2C40.726133&z=15.31"
            target="_blank"
            rel="noopener noreferrer"
            data-ignore-audio="true"
          >
            <button
              className="bg-black text-white justify-center flex items-center text-[18px] px-10 py-2 rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg mx-auto mt-6 animate-pulse"
            >
              Xaritaga qarang
            </button>
          </a>
        </motion.div>

        <motion.div
          className="relative w-[550px] mt-10 h-[300px]"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gray-200 rounded-3xl -rotate-[7deg] scale-105 -z-10"></div>

          <img
            src={Gl3}
            alt="img"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </section>
  )
}

export default Manzil