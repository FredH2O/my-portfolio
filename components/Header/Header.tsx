"use client";

import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(true);
  const [lastY, setLastY] = useState<number>(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest < lastY || latest < 50);
    setLastY(latest);
    console.log(`latest value ${latest}`);
    console.log(`lastY value ${lastY}`);
  });

  return (
    <motion.header
      className="fixed z-50 w-full bg-black"
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Navbar />
    </motion.header>
  );
};

export default Header;
