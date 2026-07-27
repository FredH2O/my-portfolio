import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/FredH2O",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/fred-huertas/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://github.com/FredH2O",
    },
  ];

  return (
    <footer className="text-white bg-black">
      <div className="container grid grid-cols-1 gap-6 px-5 m-auto lg:grid-cols-2 py-28">
        <div className="flex flex-col space-y-7">
          <h2 className="text-xl font-semibold tracking-wide">
            Frederico Huertas
          </h2>
          <p className="max-w-md text-sm text-slate-400">
            Frontend developer building things with React and WordPress,
            currently hunting for a junior role where I can keep learning on the
            job.
          </p>
        </div>
        <div className="flex flex-col lg:items-end space-y-7">
          <h2 className="text-xl font-semibold tracking-widest uppercase">
            Socials
          </h2>
          <div className="flex gap-5 text-3xl text-slate-400">
            {socials.map(({ name, icon, href }) => (
              <a
                key={name}
                aria-label={name}
                className="transition-colors hover:text-slate-200"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container font-extralight text-slate-600 text-center py-10 m-auto border-slate-700 border-t-[0.5px]">
        <p className="text-sm">
          &copy;Copyright {currentYear}. Made by{" "}
          <a
            href="https://www.linkedin.com/in/fred-huertas/"
            target="_blank"
            rel="noopener noreferrer"
            className="italic text-slate-300 hover:text-slate-100 transition-colors"
          >
            Fred
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
