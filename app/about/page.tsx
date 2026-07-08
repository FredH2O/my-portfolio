import Skills from "@/components/About/Skills";
import FadeInSection from "@/components/animations/FadeInSection";

const rolesAndInterests = [
  "Web Developer",
  "Frontend Developer",
  "Gamer",
  "Houseplant Enthusiast",
  "WordPress Developer",
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
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-gray-300 lg:text-left md:text-xl">
                I live in the space between React and WordPress, combining
                modern frontend development with the flexibility of a powerful
                CMS. I enjoy building headless solutions where WordPress manages
                content behind the scenes while React delivers dynamic,
                user-focused experiences. I also appreciate the traditional
                WordPress approach when a project calls for themes, plugins, and
                efficient content management.
              </p>

              <p className="text-lg leading-relaxed text-gray-300 lg:text-left md:text-xl">
                Through voluntary work with HHT and Greenhouse Culture, I’ve
                gained experience working with real content, improving websites,
                creating event pages, and understanding how digital solutions
                support organisations and their communities.
              </p>

              <p className="text-lg leading-relaxed text-gray-300 lg:text-left md:text-xl">
                Outside of development, I enjoy gaming, exploring new
                technology, and taking care of my houseplants. They remind me
                that growth takes patience, consistency, and a little bit of
                attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default About;
