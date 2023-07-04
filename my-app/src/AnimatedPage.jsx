import { motion } from "framer-motion";

const animations = {
  //   initial: { opacity: 0, y: 100 },
  //   animate: { opacity: 1, y: 0 },
  //   exit: { opacity: 0, y: -100 },
  initial: { scaleY: 0, opacity: 0, y: -200 },
  animate: { scaleY: 1, opacity: 1, y: 0 },
  exit: { scaleY: 0, opacity: 0, y: 100 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
