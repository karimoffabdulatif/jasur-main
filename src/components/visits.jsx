import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { db } from '../firebase'; // firebase.js dan eksport qilingan
import { collection, addDoc } from 'firebase/firestore';

const Visits = () => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = async () => {
    if (!name || !attendance || !guests) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    try {
      await addDoc(collection(db, 'tasdiqlar'), {
        name,
        attendance,
        guests,
        createdAt: new Date().toISOString()
      });
      alert("✅ Ma'lumot muvaffaqiyatli yuborildi!");
      setName('');
      setAttendance('');
      setGuests('');
    } catch (error) {
      alert("❌ Xatolik yuz berdi: " + error.message);
    }
  };

  return (
    <motion.section
      className='tasdiq pt-20 sm:pt-30 sm:pb-20'
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >
      <p className='petit-formal-script-regular flex justify-center sm:pl-5 text-[55px] sm:text-[60px]'>Tasdiq</p>
      <p className='font-serif text-center text-[22px] sm:text-2xl flex justify-center pb-[40px]  sm:pb-20'>
        Iltimos, 2025 yil 29 iyunga qadar ishtirokingizni tasdiqlang
      </p>

      <input
        type="text"
        placeholder="Ism va familiyangizni yozing"
        className="w-[300px]  flex justify-center ml-11 sm:ml-0 text-[18px] sm:w-full border-b border-gray-700 px-4 bg-transparent placeholder-left"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="mt-10 space-y-4 text-xl pl-12 sm:pl-0">
        <div className="space-y-2">
          <label className="flex  items-center space-x-2">
            <input
              type="radio"
              name="attendance"
              value="yes"
              checked={attendance === "yes"}
              onChange={(e) => setAttendance(e.target.value)}
              className="accent-gray-800"
            />
            <span className='font-serif'>Men kela olaman</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="attendance"
              value="no"
              checked={attendance === "no"}
              onChange={(e) => setAttendance(e.target.value)}
              className="accent-gray-800"
            />
            <span className='font-serif'>Men kela olmayman</span>
          </label>
        </div>

        <p className="font-bold mt-8 text-[20px] font-serif">Kim bilan  kutaylik?</p>

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="guests"
              value="alone"
              checked={guests === "alone"}
              onChange={(e) => setGuests(e.target.value)}
              className="accent-gray-800"
            />
            <span className='font-serif'>Yolg‘iz bo‘laman</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="guests"
              value="with-partner"
              checked={guests === "with-partner"}
              onChange={(e) => setGuests(e.target.value)}
              className="accent-gray-800"
            />
            <span className='font-serif'>Hamroh bilan kelaman</span>
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-black text-white justify-center  ml-18 sm:ml-[550px] flex items-center text-[16px] sm:text-[18px]   px-10 py-2 rounded-full border-2 border-black hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg sm:mt-6 animate-pulse"
        >
          Jo'natish
        </button>


        <p className='font-serif text-center pr-12 sm:pr-0 pb-10 sm:pb-0 pt-10 sm:pt-12 sm:text-[22px]'>Agar siz boshqa davlatdan kelsangiz, biz sizni mamnuniyat bilan kutib olamiz va mehmonxona xonasini bron qilishga tayyormiz. Iltimos, bu haqda oldindan quyida ko‘rsatilgan telefon raqamiga <span className='font-sans font-semibold'>[Jasubek: +998979725787]</span> xabar bering.</p>
      </div>
    </motion.section>
  );
};

export default Visits;
