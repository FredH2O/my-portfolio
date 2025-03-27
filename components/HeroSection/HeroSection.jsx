import Image from "next/image";
import Threads from "./Threads";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex justify-center items-center">
      {/* background for hero */}
      <div className="absolute border-red-600 border w-full h-full -z-10 bg-black opacity-25">
        <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
      </div>

      {/* image here */}
      <div className="flex">
        <Image
          className="rounded-full border-2 border-white"
          src="/images/me-logo.png"
          width={150}
          height={100}
          priority
        />
        <div>
          <h2 className="text-4xl">Frederico</h2>
          <p>Frontend Developer / Web Developer</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
