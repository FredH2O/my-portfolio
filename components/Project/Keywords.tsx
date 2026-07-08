const Keywords = ({ selectedProject }) => {
  return (
    <div className="py-5">
      <h2 className="mb-3 text-sm uppercase tracking-widest text-slate-500">
        Tech Stack
      </h2>
      <ul className="flex flex-wrap gap-2">
        {selectedProject.keywords.map((word, index) => (
          <li
            key={index}
            className="
              rounded-full
              border
              border-slate-700
              px-3
              py-1
              text-xs
              font-medium
              text-slate-300
              transition-colors
              hover:border-slate-500
              hover:text-white
            "
          >
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
