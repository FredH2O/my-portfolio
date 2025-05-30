"use client";

import { motion } from "framer-motion";
import BlurText from "./BlurText";
import LoadingScreen from "./LoadingScreen";

const Loader = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center 
      justify-center bg-black text-white text-3xl"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5 }}
      >
        <LoadingScreen />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
