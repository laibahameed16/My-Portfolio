import React from "react";
import { motion } from "framer-motion";
import { LOGOS } from "../Constants"; // ✅ import from constants

// Animation variants for smooth fade-in
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 1.2, ease: "easeOut" },
  }),
};

const LogoStrip = () => {
  return (
    <div className="bg-gradient-to-r from-[#0a3863] to-[#0e406c] py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6 place-items-center">
        {LOGOS.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-48 md:w-56 hover:scale-110 transition-transform duration-500"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={index * 0.3}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoStrip;
