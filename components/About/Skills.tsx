"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";
import icons from "@/app/data/skills.json";

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
              <div className="flex h-16 w-16 items-center justify-center rounded border-2 border-slate-700 bg-slate-800 p-1 transition duration-300 ease-in-out hover:border-sky-500 active:border-sky-500">
                <Image
                  src={icon.icon}
                  alt={icon.alt}
                  width={50}
                  height={50}
                  className="w-auto h-auto"
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
