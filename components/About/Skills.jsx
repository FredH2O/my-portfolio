import Image from "next/image";
import icons from "./Skills.json";

const Skills = () => {
  return (
    <div className="relative flex flex-wrap items-center justify-center gap-10 p-5 lg:p-10 lg:gap-10">
      {icons.map((icon) => (
        <Image
          key={icon.id}
          src={icon.icon}
          alt={icon.alt}
          width={50}
          height={50}
        />
      ))}
    </div>
  );
};

export default Skills;
