import Threads from "./Threads";
import FadeInSection from "../animations/FadeInSection";

const HeroSection = () => {
  return (
    <FadeInSection>
      <div className="relative">
        <div className="relative flex items-center justify-center h-screen">
          {/* background for hero */}

          <div className="absolute w-full h-full bg-black opacity-25 -z-10">
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction={false}
            />
          </div>

          {/* image here */}
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="flex flex-col items-start justify-center p-5 space-y-3 lg:text-left">
              <h2 className="text-4xl font-bold lg:text-5xl">
                Building and learning,{" "}
                <span className="italic text-sky-500">
                  one project at a time
                </span>
                .
              </h2>
              <p className="text-lg font-semibold text-gray-300">
                Web developer exploring frontend technologies and creating
                clean, responsive websites.
              </p>
              <button className="px-10 py-3 mt-3 text-xl duration-500 ease-in-out border rounded-md cursor-pointer hover:translate-x-2 hover:pr-25 text-slate-800 hover:text-slate-900 bg-sky-500 hover:bg-sky-400">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default HeroSection;
