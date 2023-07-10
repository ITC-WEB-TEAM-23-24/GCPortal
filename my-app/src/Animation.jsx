import { motion } from "framer-motion";


const ScoreboardAnimation = ({ children,id }) => {

  const scorecardanimations = {
    initial: { opacity:0 ,scaleY: 1, y: -30,},
    animate: { scaleY: 1, opacity: 1, y: 0 },
  };
  
  const delayTimes = {
    first: .3,
    second: 0.4,
    third: 0.5,
    forth:0.6,
    fifth:.7,
    sixth:.8,
    seventh:.9,
    eighth:1.0,
  };
  const delay = delayTimes[id] || 0.1;
  return (
    <motion.div
      variants={scorecardanimations}
      initial="initial"
      animate="animate" 
      transition={{ 
        duration: .1,
        delay:delay
       }}
    >
      {children}
    </motion.div>
  );
};

export default ScoreboardAnimation;
