import KEYWORD_BG from "@/app/utils/keywordsColor.js";

const Keywords = ({ selectedProject }) => {
  return (
    <div className="py-5">
      <h2 className="pb-3 font-extralight">Tech Stack</h2>
      <ul className="flex flex-wrap justify-center gap-1">
        {selectedProject.keywords.map((word, index) => (
          <li
            className={`px-3 font-semibold text-sm italic py-1 border rounded border-slate-400 text-slate-900 ${KEYWORD_BG(
              word
            )}`}
            key={index}
          >
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
