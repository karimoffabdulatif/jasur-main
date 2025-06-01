import React from 'react';
import { motion } from "framer-motion";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import Gul from '../assets/gul3.png';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  }
};

const Contact = () => {
  return (
    <section className='bg-black opacity-90 px-10 py-10 rounded-4xl mb-20'>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
        className="flex flex-col items-center"
      >
        <motion.p
          variants={itemVariants}
          className='petit-formal-script-regular flex justify-center pl-5 text-[35px] sm:text-[60px] text-white'
        >
          Kontaktlar
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="font-serif text-[16px] sm:text-[20px] pt-4 sm:pt-7 text-center text-white max-w-3xl"
        >
          Huddi shunday to'y taklifnomasi haqida sizda qandaydir savollar bo‘lsa, quyidagi administratorga murojaat qilishingiz mumkin:
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="font-serif text-[25px] sm:text-[30px] font-bold pt-6 sm:pt-7 text-center text-white"
        >
          Abdulatif
        </motion.p>

        <motion.div
          variants={itemVariants}
          className='text-center gap-2 sm:gap-5 flex justify-center text-white text-2xl sm:text-5xl pt-3 sm:pt-5'
        >
          <a href="tel:+998940017653" target="_blank" rel="noopener noreferrer">
            <LocalPhoneIcon style={{ fontSize: "35px" }} />
          </a>

          <a href="https://t.me/ak_0_001" target="_blank" rel="noopener noreferrer">
            <TelegramIcon style={{ fontSize: "35px" }} />
          </a>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className='petit-formal-script-regular flex sm:pt-10 justify-center pl-5 text-[24px] sm:text-[30px] text-white'
        >
          www.karimoff-dev.uz
        </motion.p>

        <motion.button
          variants={itemVariants}
          className="bg-white text-black justify-center flex items-center text-[18px] px-8 py-1 rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg mx-auto mt-6 sm:mt-2 animate-pulse"
        >
          Tashrif buyurish
        </motion.button>

        <motion.p
          variants={itemVariants}
          className='font-serif text-[16px] sm:text-[20px] pt-10 text-center text-white max-w-3xl'
        >
          Sizning qulayligingiz uchun bu funksiya optimallashtirilgan va foydalanuvchilar uchun maksimal oddiy qilib ishlab chiqilgan.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className='font-serif text-[16px] sm:text-[20px] pt-10 text-center text-white max-w-3xl'
        >
          Bu sahifa — zamonaviy texnologiyalar, qulay dizayn va foydalanuvchi ehtiyojlarini inobatga olgan holda yaratilgan. Mana shunday taklifnoma kerak bo'lsa bemalol men bilan bog'laning.
        </motion.p>

        <motion.img
          variants={itemVariants}
          src={Gul}
          alt="img"
          className='w-[100px] sm:w-[150px] h-auto pt-10 opacity-95'
        />
      </motion.div>
    </section>
  );
}

export default Contact;
