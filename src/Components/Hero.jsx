import React from "react";
import { FaFacebookF, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { HERO_DATA, ANIMATION } from "../Constants";

// Animation variants for fade-up effect
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const Hero = () => {
  const ICONS = {
    facebook: FaFacebookF,
    dribbble: FaDribbble,
    linkedin: FaLinkedinIn,
  };

  return (
    <section className="bg-gradient-to-r from-[#031D34] to-[#050E16] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-24 overflow-hidden">
      
      {/* Left Side Content with animation */}
      <motion.div
        className="max-w-xl space-y-6"
        initial="hidden"
        animate="visible"
      >
        <motion.button
          className="bg-blue-500 text-xs md:text-sm font-semibold px-4 py-1 rounded-md tracking-widest uppercase"
          variants={fadeUp}
          custom={0.1}
        >
          {HERO_DATA.name}
        </motion.button>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          variants={fadeUp}
          custom={0.2}
        >
          {HERO_DATA.greeting}
        </motion.h1>

        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-blue-500"
          variants={fadeUp}
          custom={0.3}
        >
          I’M A{" "}
          <ReactTyped
            strings={HERO_DATA.typedTexts}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed"
          variants={fadeUp}
          custom={0.4}
        >
          {HERO_DATA.description}
        </motion.p>

        <motion.div
          className="flex items-center space-x-6 pt-4"
          variants={fadeUp}
          custom={0.5}
        >
          <button className="bg-blue-500 hover:bg-transparent hover:border-1 text-white font-bold px-6 py-3 rounded-full text-sm flex items-center gap-2 transition-all duration-300 border border-transparent hover:border-blue-500">
            {HERO_DATA.buttonText}
          </button>

          <div className="flex space-x-4">
            {HERO_DATA.socials.map((social, index) => {
              const Icon = ICONS[social.icon];
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full border border-white flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <div className="relative mt-10 md:mt-0">
        <img
          src={HERO_DATA.image}
          alt="Hero"
          className="w-[350px] md:w-[450px] object-cover rounded-lg z-10 relative"
        />

        {/* Decorative Lines & Circles */}
        <div className="absolute top-10 -left-10 w-[500px] h-[400px] opacity-10 border border-white rounded-full blur-sm"></div>
        <div className="absolute bottom-0 -right-10 w-20 h-20 bg-blue-900 rounded-full opacity-60 blur-sm"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-700 rounded-full opacity-70 blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;
