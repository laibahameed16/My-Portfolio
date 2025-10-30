import { motion } from "framer-motion";
import { SCROLL_ANIMATION } from "../Constants";

const ScrollAnimationWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: SCROLL_ANIMATION.offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: SCROLL_ANIMATION.once, amount: SCROLL_ANIMATION.viewportAmount }}
      transition={{ duration: SCROLL_ANIMATION.duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
