import { MouseEventHandler } from "react";

type ClickType = {
  onClick: MouseEventHandler<HTMLInputElement>;
};

const BurgerIcon = ({ onClick }: ClickType) => {
  return (
    <label>
      <div className="flex flex-col items-center justify-center h-10 cursor-pointer w-9 md:hidden">
        <input className="hidden peer" type="checkbox" onClick={onClick} />
        <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
        <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
        <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
      </div>
    </label>
  );
};

export default BurgerIcon;
