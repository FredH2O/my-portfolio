"use client";

import { useState, useEffect, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader/Loader";
import Cursor from "./Cursor";

type ChildProp = {
  children: ReactNode;
};

const AppWrapper = ({ children }: ChildProp) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false), 1000;
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loader key="loader" />
      ) : (
        <>
          <Cursor />
          {children}
        </>
      )}
    </AnimatePresence>
  );
};

export default AppWrapper;
