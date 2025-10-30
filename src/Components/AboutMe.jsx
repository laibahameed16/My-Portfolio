import React from "react";
import { motion } from "framer-motion";
import profileimg from "../assets/profile.png";
import loading from "../assets/loading.png";
import { ANIMATION, ABOUT_ME_DATA } from "../Constants"; // ✅ Import data

const AboutMe = () => {
  const { name, role, university, degree, description, stats, buttonText } = ABOUT_ME_DATA;

  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#0f172a] text-white p-8 md:p-16 relative">
        
        {/* Left Image with Animated Entrance */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={ANIMATION.viewport}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Left Bottom Circle behind Image */}
          <motion.img
            src={loading}
            alt="Loading"
            className="absolute left-0 bottom-0 transform translate-x-[-5%] translate-y-[20%] w-65 h-75 rounded-full object-cover z-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />

          <motion.img
            src={profileimg}
            alt={name}
            className="rounded-xl shadow-lg w-96 h-auto object-cover relative z-10"
            initial={ANIMATION.initial}
            whileInView={ANIMATION.whileInView}
            viewport={ANIMATION.viewport}
            transition={ANIMATION.transition}
          />
        </motion.div>

        {/* Right Text with Animation */}
        <motion.div
          className="md:w-1/2 relative z-10"
          initial={ANIMATION.initial}
          whileInView={ANIMATION.whileInView}
          viewport={ANIMATION.viewport}
          transition={ANIMATION.transition}
        >
          <motion.p
            className="text-sm text-white mb-2 font-semibold tracking-widest leading-6 border border-transparent bg-blue-900 rounded px-2 py-1 inline-block"
          >
            ABOUT ME
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-snug tracking-wide"
          >
            I'M <span className="text-blue-500">{name}</span> <br /> {role}
          </motion.h2>

          <motion.p className="text-gray-300 mb-6 text-lg leading-relaxed tracking-wide">
            I’m a passionate {role} currently pursuing my <br />
            <span className="text-blue-400 font-semibold">{degree}</span> 
            from the <span className="text-blue-400 font-semibold">{university}</span>.<br />
            {description}
          </motion.p>

          {/* Stats Section */}
          <div className="flex gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-transparent border border-white rounded-lg px-6 py-6 text-center"
              >
                <p className="text-2xl font-bold text-white">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="bg-blue-500 hover:bg-transparent hover:border-1 mt-6 text-white font-bold px-6 py-3 rounded-full text-sm flex items-center gap-2 transition-all duration-300 border border-transparent hover:border-blue-500"
          >
            {buttonText}
          </motion.button>
        </motion.div>

        {/* Right Side Rotating Circle */}
        <motion.img
          src={loading}
          alt="Rotating Shape"
          className="absolute right-0 top-1/2 transform -translate-y-[250px] w-50 h-45 rounded-full object-cover"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        />
      </div>
    </div>
  );
};

export default AboutMe;
