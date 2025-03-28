import Image from "next/image";
import Threads from "./Threads";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative flex items-center justify-center h-screen">
        {/* background for hero */}

        <div className="absolute w-full h-full bg-black opacity-25 -z-10">
          <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
        </div>

        {/* image here */}
        <div className="flex">
          <Image
            className="w-auto h-auto rounded-full"
            src="/images/me-logo.png"
            alt="Me-Lol"
            width={100}
            height={100}
            priority
          />
          <div className="flex flex-col items-start justify-center p-5 space-y-1">
            <h2 className="text-5xl">Frederico Huertas</h2>
            <p className="">Frontend / Web Developer</p>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-screen">
        <div className="p-2 space-y-3 border rounded bg-slate-100">
          <FaGithub size={35} color="black" />
          <FaLinkedin size={35} color="blue" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
