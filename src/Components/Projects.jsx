import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTimes, FaArrowRight } from "react-icons/fa";
import { GALLERY_DATA } from "../Constants";

const Projects = () => {
  const [currentRow, setCurrentRow] = useState(0);
  const [modalImg, setModalImg] = useState(null);

  const rows = [
    GALLERY_DATA.images.slice(0, 3),
    GALLERY_DATA.images.slice(3, 6),
  ];
  const captions = GALLERY_DATA.captions;

  return (
    <div className="bg-gradient-to-r from-[#042441] to-[#0a263e] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-white mb-2 font-semibold tracking-widest leading-6 border border-transparent bg-blue-900 rounded px-2 py-1 inline-block">
            {GALLERY_DATA.headingTag}
          </p>
          <h1 className="text-5xl font-bold text-white mt-4">
            {GALLERY_DATA.headingTitle}
          </h1>
        </motion.div>

        {/* Image Rows */}
        <motion.div
          className="relative mt-8 rounded-lg overflow-hidden h-[460px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentRow * 100}%)` }}
          >
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex w-full flex-shrink-0">
                {row.map((img, index) => (
                  <motion.div
                    key={index}
                    className="w-1/3 p-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + index * 0.2,
                    }}
                  >
                    <div className="relative group border-10 border-white rounded-lg overflow-hidden h-[350px]">
                      {/* Image */}
                      <img
                        src={img}
                        alt={`Project ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:blur-[1.5px]"
                      />

                      {/* Plus Button */}
                      <div
                        onClick={() => setModalImg(img)}
                        className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <FaPlus className="bg-blue-500 text-white text-5xl p-4 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                        </motion.div>
                      </div>

                      {/* Caption */}
                      <motion.div
                        className="absolute bottom-0 left-0 w-full bg-white text-black flex items-center justify-between px-4 py-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <p className="text-lg font-semibold">
                          {captions[rowIndex][index]}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="bg-blue-500 hover:bg-blue-800 text-white transition p-2 rounded-full"
                        >
                          <FaArrowRight />
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dots */}
        <motion.div
          className="flex justify-center mt-6 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {rows.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentRow(idx)}
              animate={{
                scale: currentRow === idx ? 1.6 : 1,
                width: currentRow === idx ? 20 : 12,
              }}
              transition={{ duration: 0.4 }}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentRow === idx ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </motion.div>

        {/* Modal */}
      {modalImg && (
  <motion.div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      className="relative w-[800px] h-[500px] bg-[#0a0a0a] rounded-lg flex items-center justify-center shadow-2xl overflow-hidden"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Fixed size image */}
      <img
        src={modalImg}
        alt="Full"
        className="w-full h-full object-cover rounded-lg"
      />

      {/* ❌ Close Button (fixed top-right) */}
      <button
        onClick={() => setModalImg(null)}
        className="absolute top-3 right-3 text-white text-2xl p-2 bg-black/60 hover:bg-black/80 rounded-full cursor-pointer transition-transform transform hover:scale-110 z-50"
      >
        <FaTimes />
      </button>
    </motion.div>
  </motion.div>
)}

      </div>
    </div>
  );
};

export default Projects;
