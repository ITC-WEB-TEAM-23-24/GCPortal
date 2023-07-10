import { motion } from "framer-motion";

const ScoreboardAnimation = ({ children, id }) => {
  const scorecardanimations = {
    initial: { opacity: 0, scaleY: 1, y: -30 },
    animate: { scaleY: 1, opacity: 1, y: 0 },
  };

  const delayTimes = {
    1: 0.3,
    2: 0.4,
    3: 0.5,
    4: 0.6,
    5: 0.7,
    6: 0.8,
    7: 0.9,
    8: 1.0,
  };
  const delay = delayTimes[id] || 0.1;
  return (
    <motion.div
      variants={scorecardanimations}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.1,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScoreboardAnimation;
