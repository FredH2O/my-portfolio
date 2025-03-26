import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="grid lg:grid-cols-2 px-5 grid-cols-1 container m-auto py-28 gap-6">
        <div className="flex flex-col space-y-7">
          <h2 className="text-xl font-semibold tracking-wide">
            Frederico Huertas
          </h2>
          <p className="text-slate-400 text-sm max-w-md">
            A Junior Frontend Developer dedicated to building responsive and
            user-friendly websites and web applications, combining creativity
            and technical skills to enhance the overall user experience and
            interface.
          </p>
        </div>
        <div className="flex flex-col lg:items-end space-y-7">
          <h2 className="uppercase font-semibold text-xl tracking-widest">
            Socials
          </h2>
          <div className="text-3xl flex gap-5 text-slate-400">
            <a
              className="hover:text-sky-500"
              href="https://github.com/FredH2O"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-sky-500"
              href="https://www.linkedin.com/in/fred-huertas/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="container font-extralight text-slate-600 text-center py-10 m-auto border-slate-700 border-t-[0.5px]">
        <p className="text-sm">
          &copy;Copyright 2025. Made by{" "}
          <a
            href="https://www.linkedin.com/in/fred-huertas/"
            className="italic text-sky-500 hover:text-sky-400"
          >
            Fred
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
