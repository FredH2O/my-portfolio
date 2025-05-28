"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 150 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  return (
    <motion.div
      className="fixed xl:block hidden z-[9999] w-6 h-6 bg-emerald-400 rounded-full pointer-events-none mix-blend-difference"
      style={{ top: cursorY, left: cursorX }}
    />
  );
};

export default Cursor;
