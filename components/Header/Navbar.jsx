"use client";
import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import Link from "next/link";

const Navigation = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
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
        <h1 className="text-2xl font-bold">&lt;Fred /&gt;</h1>
      </div>

      <div className="">
        <ul className="hidden space-x-6 md:flex">
          {Navigation.map((title) => (
            <li
              className="transition-all duration-200 cursor-pointer hover:text-sky-500"
              key={title.name}
            >
              <Link href={title.link}>{title.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <BurgerIcon onClick={handleClick} />
        <ul
          className={`absolute p-20 h-[300px] mt-18 border-y space-y-5 md:hidden transition-transform ease-in-out duration-150 ${
            isMenu ? "translate-x-0" : "-translate-x-full"
          } space-y-1 z-10 bg-slate-900 inset-0 flex flex-col justify-center items-center`}
        >
          {Navigation.map((title) => (
            <li key={title.name}>{title.name}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
