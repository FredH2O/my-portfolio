import Image from "next/image";
import icons from "./Skills.json";

const Skills = ({ className }) => {
  return (
    <div
      className={`relative ${className} flex flex-wrap items-center justify-center gap-10 p-10`}
    >
      {icons.map((icon) => (
        <div
          className="flex justify-center bg-slate-800 w-auto transition duration-300 ease-in-out h-[60px] p-1 border-2 border-slate-700 hover:border-sky-500 cursor-pointer rounded active:border-sky-500 active:duration-500"
          key={icon.id}
        >
          <Image
            src={icon.icon}
            alt={icon.alt}
            width={50}
            priority
            height={50}
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
