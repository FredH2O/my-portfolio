"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";
import icons from "./Skills.json";

type ClassProp = {
  className: string;
};

const Skills = ({ className }: ClassProp) => {
  return (
    <div
      className={`relative ${className} flex flex-wrap items-center justify-center gap-10 p-10`}
    >
      {icons.map((icon) => (
        <Tooltip.Provider key={icon.id} delayDuration={50}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="flex justify-center w-auto h-auto p-1 transition duration-300 ease-in-out border-2 rounded cursor-pointer bg-slate-800 border-slate-700 hover:border-sky-500 active:border-sky-500 active:duration-500">
                <Image
                  className="w-13 h-[50px]"
                  src={icon.icon}
                  alt={icon.alt}
                  title={icon.name}
                  width={50}
                  height={50}
                  priority
                />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                className="z-50 rounded bg-gray-500 px-2 py-1 text-sm text-white shadow-lg animate-fade-in-up"
                sideOffset={8}
              >
                {icon.name}
                <Tooltip.Arrow className="fill-gray-500" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </div>
  );
};

export default Skills;
