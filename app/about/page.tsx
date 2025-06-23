import Skills from "@/components/About/Skills";
import FadeInSection from "@/components/animations/FadeInSection";

const rolesAndInterests = [
  "Web Developer",
  "Frontend Developer",
  "Gamer",
  "Houseplant Enthusiast",
  "Aquatic Life Specialist",
];

const About = () => {
  return (
    <FadeInSection>
      <div className="container flex flex-col justify-center h-auto mx-auto fade-in fade-in-active md:h-screen">
        <div className="container grid items-center gap-1 m-auto lg:grid-cols-2">
          {/* Skills Logos */}
          <Skills className={"order-2 lg:order-1"} />

          {/* About Text */}
          <div className="order-1 p-6 lg:order-2 lg:p-10">
            <div className="pt-3 pb-10 space-y-1">
              <p className="text-xl font-bold text-sky-500">
                The dude behind the code...
              </p>
              <h2 className="text-3xl leading-relaxed">Frederico Huertas</h2>
              <ul className="flex flex-row flex-wrap gap-1 text-slate-500">
                {rolesAndInterests.map((title, index) => (
                  <li className="text-sm italic" key={index}>
                    {title}
                    {index < rolesAndInterests.length - 1 ? " |" : ""}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg leading-relaxed text-gray-300 lg:text-left md:text-xl">
              I’m all about crafting intuitive, user-friendly web experiences as
              I dive into frontend development. I’ve gained hands-on experience
              with modern web tech like HTML, CSS, JavaScript, React, and
              Tailwind CSS, which I love for styling. I’ve also worked with
              Bootstrap, Git, GitHub, and explored Material-UI to level up my
              projects. <br />
              <br />
              Every new project is a chance to keep improving and create digital
              solutions that matter. When I’m not coding, you’ll find me gaming,
              escaping into virtual worlds to unwind. I also enjoy caring for my
              houseplants, keeping a bit of greenery around always keeps me
              grounded. If you’re looking to build something cool together,
              let’s make it happen!
            </p>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default About;
