import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CURSOR_SETTINGS } from "../Constants";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      style={{
        width: `${CURSOR_SETTINGS.size}px`,
        height: `${CURSOR_SETTINGS.size}px`,
        backgroundColor: CURSOR_SETTINGS.color,
      }}
      animate={{
        x: mousePosition.x - CURSOR_SETTINGS.size / 2,
        y: mousePosition.y - CURSOR_SETTINGS.size / 2,
      }}
      transition={{
        type: "spring",
        stiffness: CURSOR_SETTINGS.stiffness,
        damping: CURSOR_SETTINGS.damping,
      }}
    />
  );
};

export default CursorFollower;
