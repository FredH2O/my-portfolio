"use client";
import { motion } from "framer-motion";
import React from "react";

const FadeInSection = ({ children }) => {
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
