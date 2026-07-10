import Skills from "@/components/About/Skills";
import FadeInSection from "@/components/animations/FadeInSection";

const rolesAndInterests = [
  "Frontend Developer",
  "React Developer",
  "CMS Experience",
];

const About = () => {
  return (
    <FadeInSection>
      <div className="container mx-auto flex min-h-screen items-center px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Skills Logos */}
          <Skills className={"order-2 lg:order-1"} />

          {/* About Text */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-8 space-y-3">
              <p className="text-sm uppercase tracking-widest text-sky-500">
                About Me
              </p>

              <h2 className="text-4xl font-bold text-white">
                Frederico Huertas
              </h2>

              <ul className="flex flex-wrap gap-2">
                {rolesAndInterests.map((title) => (
                  <li
                    className="
                    rounded-full
                    bg-slate-800
                    px-3
                    py-1
                    text-sm
                    text-slate-300
                    "
                    key={title}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="space-y-5 text-lg leading-relaxed text-gray-300">
              <p>
                I build websites using React and WordPress, combining modern
                frontend development with the flexibility of a powerful CMS. I
                enjoy creating responsive experiences, whether it&apos;s a
                custom React interface or a practical WordPress solution.
              </p>

              <p>
                Through voluntary work with HHT and Greenhouse Culture,
                I&apos;ve gained experience working with real content, improving
                websites, creating event pages, and understanding how digital
                solutions support organisations and their communities.
              </p>

              <p>
                Outside of development, I enjoy gaming, exploring new
                technology, and taking care of my houseplants. They remind me
                that growth takes patience, consistency, and attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default About;
