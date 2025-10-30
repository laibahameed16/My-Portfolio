import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../Constants'; // ✅ Import data

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Experience = () => {
  const headings = ["About", "Projects", "Education"]; // 👈 Different headings for cards

  return (
    <motion.section
      className="bg-gradient-to-b from-[#010b19] via-[#021a33] to-[#001122] py-16 px-8 md:px-20 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-700/20 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-600/20 rounded-full blur-[100px] -z-0"></div>

      {/* Heading Section */}
      <motion.div className="mb-12 text-start max-w-3xl" variants={cardVariants}>
        <span className="bg-blue-800 text-blue-300 uppercase text-sm font-semibold px-4 py-1 rounded-full tracking-wider">
          Experience
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
          My Work <span className="text-blue-500">Experience</span>
        </h2>

        {/* 👇 Intro paragraph (left aligned) */}
        <p className="text-gray-400 mt-4 text-lg leading-relaxed">
          A glimpse into my journey as a passionate Front-End Developer crafting beautiful and responsive web experiences.
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="space-y-10">
        {EXPERIENCE_DATA.map((exp, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row gap-8 bg-[#02264b]/60 border border-[#0a355c] rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-blue-800/30 transition-all duration-500 backdrop-blur-sm hover:scale-[1.02]"
            variants={cardVariants}
          >
            {/* Left Info Card */}
            <motion.div
              className="bg-gradient-to-b from-blue-600 to-blue-800 p-5 rounded-2xl flex flex-col justify-between items-center md:items-start text-center md:text-left shadow-md min-h-[180px] md:min-h-[210px] w-full md:w-[250px] flex-shrink-0"
              whileHover={{ scale: 1.03 }}
            >
              <div>
                <h3 className="text-white font-extrabold text-lg md:text-xl mb-1">{exp.title}</h3>
                <p className="text-blue-200 uppercase font-semibold mb-1 text-xs md:text-sm">{exp.company}</p>
                <p className="text-blue-200 uppercase font-semibold mb-3 text-xs md:text-sm">{exp.date}</p>
              </div>
              <button className="bg-white text-blue-800 text-[10px] md:text-xs font-bold rounded-full py-1.5 px-4 uppercase tracking-wider hover:bg-blue-100 transition">
                {exp.type}
              </button>
            </motion.div>

            {/* Right Description */}
            <motion.div
              className="flex-1 text-gray-300 leading-relaxed flex flex-col justify-center"
              variants={cardVariants}
            >
              {/* 👇 Heading changes based on index */}
              <h3 className="text-white font-bold text-2xl mb-3">
                {headings[index % headings.length]}
              </h3>
              <p className="text-gray-300 text-base">{exp.about}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
