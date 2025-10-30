import React from "react";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaCode,
  FaSearch,
  FaLaptopCode,
  FaStar,
} from "react-icons/fa";

// ✅ Local image import for SEO card

import service1Img from "../assets/service1img.png";
import service2Img from "../assets/service2img.png";
import service3Img from "../assets/service3img.png";
import service4Img from "../assets/service4img.png";
const services = [
  {
    title: "Creative Web Design",
    description:
      "Designing visually stunning, user-focused, and responsive layouts that represent your brand perfectly.",
    image:
      service1Img,
    icon: <FaPaintBrush className="text-white text-3xl mb-3" />,
  },
  {
    title: "Front-End Development",
    description:
      "Developing modern, interactive, and fast websites using HTML, CSS, JavaScript, Bootstrap, and React.js.",
    image:
      service2Img,
    icon: <FaCode className="text-white text-3xl mb-3" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Helping websites rank higher with clean structure, optimized code, and search-friendly design techniques.",
    image: service3Img, // ✅ Local image used here
    icon: <FaSearch className="text-white text-3xl mb-3" />,
  },
  {
    title: "Responsive UI Design",
    description:
      "Creating pixel-perfect interfaces that look beautiful and function flawlessly across all devices.",
    image:
     service4Img,
    icon: <FaLaptopCode className="text-white text-3xl mb-3" />,
  },
];

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const ServiceCard = ({ title, description, image, icon, index }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInLeft}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative overflow-hidden rounded-xl shadow-lg bg-white w-full h-96 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
        {icon}
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
          className="text-white text-xl font-bold mb-2"
        >
          {title}
        </motion.h3>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
          className="text-gray-200 text-sm mb-4"
        >
          {description}
        </motion.p>
        <hr className="border border-gray-400 mb-3" />
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-[#031D34] to-[#050E16]">
      <div className="max-w-7xl mx-auto px-6 text-start">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white mb-2 font-semibold tracking-widest leading-6 border border-transparent bg-blue-900 rounded px-3 py-1 inline-block"
        >
          SERVICES
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl font-bold text-white mt-4 mb-12"
        >
          DESIGN <span className="text-blue-500">SERVICES</span> I AM PROVIDING
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {services.map((svc, idx) => (
            <ServiceCard key={idx} {...svc} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
