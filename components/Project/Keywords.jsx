import KEYWORD_BG from "@/app/utils/keywordsColor.js";

const Keywords = ({ selectedProject }) => {
  return (
    <div className="p-5 rounded bg-slate-600">
      <h2 className="font-extralight">Tech Stack</h2>
      <ul className="flex flex-wrap gap-1">
        {selectedProject.keywords.map((word, index) => (
          <li
            className={`px-3 font-semibold text-sm italic py-0.5 border-2 rounded-lg border-slate-400 text-slate-900 ${KEYWORD_BG(
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
