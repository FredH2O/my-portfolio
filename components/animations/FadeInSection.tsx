"use client";
import { motion, useInView } from "framer-motion";
import { type ReactNode, useRef } from "react";

type FadeProp = {
  children: ReactNode;
};

const FadeInSection = ({ children }: FadeProp) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      className="pt-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};

export default FadeInSection;
