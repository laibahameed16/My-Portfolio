import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS, TESTIMONIAL_DECOR } from '../constants';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { loadingImg, leftImage } = TESTIMONIAL_DECOR;

  const handleDotClick = (index) => {
    if (index !== currentIndex) setCurrentIndex(index);
  };

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="relative text-center px-4 py-12 bg-[#04182d] text-white shadow-lg">
      {/* Left side image animation */}
      <motion.img
        src={leftImage}
        alt="Decoration Left"
        className="absolute bottom-95 left-40 w-32 h-32 opacity-90"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />

      {/* Right floating rotating image */}
      <motion.img
        src={loadingImg}
        alt="Decoration Right"
        className="absolute top-1/2 right-0 left-265 transform -translate-y-1/2 w-104 h-125 rounded-full object-cover shadow-lg opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
      />

      {/* Heading */}
      <div className="mb-6">
        <motion.small
          className="bg-[#0b3c6f] px-4 py-1 rounded text-xs tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          TESTIMONIAL
        </motion.small>

        <motion.h1
          className="text-3xl font-bold mt-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          OVER <span className="text-[#189cff]">8,000+</span><br /> PEOPLE TRUST ME
        </motion.h1>
      </div>

      {/* Avatar */}
      <div className="mx-auto mb-6 w-44 h-44 rounded-full border-8 border-[#27435b] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={TESTIMONIALS[currentIndex].image}
            alt="Person"
            className="w-full h-full object-cover"
            loading="lazy"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          className="text-base font-semibold leading-relaxed px-4"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {TESTIMONIALS[currentIndex].text.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>{line}<br /></React.Fragment>
          ))}
        </motion.p>
      </AnimatePresence>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-3">
        {TESTIMONIALS.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 h-3 rounded-full ${
              currentIndex === index ? 'w-6 bg-[#189cff]' : 'w-3 bg-[#1076d3]'
            } cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
