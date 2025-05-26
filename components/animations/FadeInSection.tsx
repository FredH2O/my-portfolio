"use client";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

type FadeProp = {
  children: ReactNode;
};

const FadeInSection = ({ children }: FadeProp) => {
  return (
    <motion.section
      className="pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};

export default FadeInSection;
