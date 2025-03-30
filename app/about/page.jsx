import Skills from "@/components/About/Skills";

const About = () => {
  return (
    <section className="container flex flex-col justify-center h-full py-20 mx-auto md:h-screen">
      <h2 className="pb-10 text-4xl font-bold text-center text-gray-100 md:text-5xl">
        About Me
      </h2>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Skills Logos */}
        <Skills />

        {/* About Text */}
        <div className="p-6 lg:p-10">
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            I’m transitioning into frontend development, driven by a passion for
            crafting user-friendly web experiences. Through self-led projects
            and online courses, I’ve gained hands-on experience with modern web
            technologies. My journey is fueled by curiosity, continuous
            learning, and a strong commitment to mastering web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
