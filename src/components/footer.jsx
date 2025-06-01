import React from "react";
import { useNavigate } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-black opacity-90">
      <p className="text-white text-[14px] font-serif text-center py-6">
        <span className="font-sans">©2025</span> Все права защищены.{" "}
        <span className="text-amber-300">online taklifnomalar</span>
      </p>

      <div className="flex justify-center gap-1 pb-6">
        <a
          href="https://www.karimoff-dev.uz"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-transparent transition ease-in-out duration-300 transform hover:scale-125 cursor-pointer"
        >
          <LanguageIcon className="text-white" fontSize="large" />
        </a>

        <a
          href="https://t.me/ak_0_001"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-transparent transition ease-in-out duration-300 transform hover:scale-125 cursor-pointer"
        >
          <TelegramIcon className="text-white" fontSize="large" />
        </a>

        <a
          href="https://instagram.com/karimoff____001"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-transparent transition ease-in-out duration-300 transform hover:scale-125 cursor-pointer"
        >
          <InstagramIcon className="text-white" fontSize="large" />
        </a>

        <button
          onClick={() => navigate("/page")}
          className="p-2 rounded-full bg-transparent transition ease-in-out duration-300 transform hover:scale-125 cursor-pointer"
          aria-label="Tashrif buyuruvchilar ro'yxati sahifasiga o'tish"
        >
          <FingerprintIcon className="text-white opacity-20" fontSize="large" />
        </button>
      </div>
    </section>
  );
};

export default Footer;
