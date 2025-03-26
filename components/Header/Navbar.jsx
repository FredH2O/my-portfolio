"use client";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";

const Navigation = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Projects",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
];

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleClick = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <nav className="relative flex items-center justify-between px-5 py-4 text-zinc-100">
      <div>
        <h1 className="font-bold text-2xl">&lt;Fred /&gt;</h1>
      </div>

      <div className="">
        <ul className="md:flex hidden space-x-6">
          {Navigation.map((title) => (
            <li
              className="hover:text-sky-500 cursor-pointer transition-all duration-200"
              key={title.name}
            >
              {title.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <BurgerIcon onClick={handleClick} />

        <ul
          className={`absolute p-20 mt-18 h-screen space-y-5 md:hidden transition-all ease-in-out duration-150 ${
            isMenu ? "translate-x-full" : "-translate-x-0"
          } space-y-1 z-10 bg-slate-900 inset-0 flex flex-col justify-center items-center`}
        >
          {Navigation.map((title) => (
            <li className="" key={title.name}>
              {title.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
