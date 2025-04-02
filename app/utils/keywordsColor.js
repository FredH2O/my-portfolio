const KEYWORD_BG = (word) => {
  let color;

  switch (word) {
    case "HTML":
      color = "bg-red-500";
      break;
    case "CSS":
      color = "bg-blue-800";
      break;
    case "JavaScript":
      color = "bg-yellow-300";
      break;
    case "React":
      color = "bg-blue-600";
      break;
    case "Axios":
      color = "bg-orange-500";
      break;
    case "API":
      color = "bg-green-500";
      break;
    case "Fetching":
      color = "bg-indigo-500";
      break;
    case "TailwindCSS":
      color = "bg-cyan-500";
      break;
    case "NPM":
      color = "bg-red-800";
      break;
    case "framer-motion":
      color = "bg-yellow-500";
      break;
    case "NextJS":
      color = "bg-slate-500";
      break;
    case "BootStrap":
      color = "bg-purple-700";
      break;
    default:
      color = "bg-gray-300";
  }

  return color;
};
export default KEYWORD_BG;
