import Image from "next/image";
import icons from "./Skills.json";

const Skills = () => {
  return (
    <div className="relative flex flex-wrap items-center justify-center gap-10 p-5 lg:p-10 lg:gap-10">
      {icons.map((icon) => (
        <div className="flex justify-center w-12 h-12 rounded" key={icon.id}>
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
