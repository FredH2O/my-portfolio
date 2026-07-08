"use client";

import { ReactNode } from "react";
import Cursor from "./Cursor";

type ChildProp = {
  children: ReactNode;
};

const AppWrapper = ({ children }: ChildProp) => {
  return (
    <>
      <Cursor />
      {children}
    </>
  );
};

export default AppWrapper;
