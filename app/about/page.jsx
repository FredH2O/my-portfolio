import Skills from "@/components/About/Skills";
import FadeInSection from "@/components/animations/FadeInSection";

const theyCallMe = [
  "Web Developer",
  "Frontend Developer",
  "Gamer",
  "Houseplant Father",
  "Goldfish Specialist",
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
                {theyCallMe.map((title, index) => (
                  <li className="text-sm italic" key={index}>
                    {title}
                    {index < theyCallMe.length - 1 ? " |" : ""}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg leading-relaxed text-gray-300 lg:text-left md:text-xl">
              I’m on a mission to craft intuitive, user-friendly web
              experiences. As I transition into frontend development, I’m fueled
              by a passion for modern web technologies and continuous learning.
              I've built hands-on experience with HTML, CSS, JavaScript, React,
              and Tailwind CSS—my go-to for styling. I’m also familiar with
              Bootstrap, Git, GitHub, and even some Material-UI. With every
              project, I aim to refine my skills and create impactful digital
              solutions.
              <br />
              <br />
              Outside of coding, I’m a gamer at heart, exploring virtual worlds
              to unwind. When I’m not gaming, I enjoy taking care of my
              houseplants—bringing a little greenery into my space to keep
              things fresh and grounded. Let’s build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default About;
