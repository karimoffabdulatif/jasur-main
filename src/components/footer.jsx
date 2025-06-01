import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <section className="w-full bg-black opacity-90">
      <p className="text-white font-serif text-center py-6">
        <span className="font-sans">©2025</span> Все права защищены.{" "}
        <span className="text-amber-300">online taklifnomalar</span>
      </p>

      <div className="flex justify-center gap-4 pb-6">
        <LanguageIcon style={{ color: 'white' }} />
        <TelegramIcon style={{ color: '#00acee' }} />
        <InstagramIcon style={{ color: '#E1306C' }} />
      </div>
    </section>
  );
};

export default Footer;
