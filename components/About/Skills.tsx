import Image from "next/image";
import icons from "./Skills.json";

type ClassProp = {
  className: string;
};

const Skills = ({ className }: ClassProp) => {
  return (
    <div
      className={`relative ${className} flex flex-wrap items-center justify-center gap-10 p-10`}
    >
      {icons.map((icon) => (
        <div
          className="flex justify-center w-auto h-auto p-1 transition duration-300 ease-in-out border-2 rounded cursor-pointer bg-slate-800 border-slate-700 hover:border-sky-500 active:border-sky-500 active:duration-500"
          key={icon.id}
        >
          <Image
            className="w-13 h-[50px]"
            src={icon.icon}
            alt={icon.alt}
            title={icon.name}
            width={50}
            height={50}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
