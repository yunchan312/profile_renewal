import { useState } from "react";
import {
  SiTypescript,
  SiReact,
  SiDocusaurus,
  SiNextdotjs,
  SiReactquery,
  SiRecoil,
  SiFramer,
  SiReacthookform,
  SiStyledcomponents,
  SiTailwindcss,
  SiPostman,
  SiCloudflare,
} from "react-icons/si";

export default function Techs() {
  const [isClicked, setIsClicked] = useState(0);
  const onClick = (num) => {
    if (isClicked === 0) {
      setIsClicked(num);
    } else {
      setIsClicked(0);
    }
  };
  return (
    <div className="w-full h-[91vh] sm:px-20 p-5 ">
      <div className="sm:text-2xl text-lg pb-3 border-b-2 border-black mb-10">
        Technics
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-5 h-full">
          <div
            onClick={() => onClick(1)}
            className="border-b-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg"
          >
            Frameworks
          </div>
          <div
            onClick={() => onClick(2)}
            className="border-b-slate-400 border-l-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg"
          >
            libraries
          </div>
          <div
            onClick={() => onClick(3)}
            className="border-b-slate-400 border-l-slate-400 border-t-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg"
          >
            styles
          </div>
          <div
            onClick={() => onClick(4)}
            className="border-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg"
          >
            ets
          </div>
        </div>

        <div>
          <div
            className={`${
              isClicked === 1 ? null : "hidden"
            } w-full h-full flex flex-col gap-5 justify-center`}
          >
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiNextdotjs className="text-4xl" />
              <div className="text-2xl">NEXT</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiReact className="text-4xl text-blue-400" />
              <div className="text-2xl">React</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiTypescript className="text-4xl text-blue-600 rounded" />
              <div className="text-2xl">Typescript</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiDocusaurus className="text-4xl text-green-600" />
              <div className="text-2xl">docusaurus</div>
            </div>
          </div>

          <div
            className={`${
              isClicked === 2 ? null : "hidden"
            } w-full h-full flex flex-col gap-5 justify-center`}
          >
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiReactquery className="text-5xl" />
              <div className="text-2xl">React Query</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiRecoil className="text-5xl text-blue-500" />
              <div className="text-2xl">Recoil</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiFramer className="text-5xl text-black" />
              <div className="text-2xl">Framer-Motion</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiReacthookform className="text-5xl text-pink-500" />
              <div className="text-2xl">Framer-Motion</div>
            </div>
          </div>

          <div
            className={`${
              isClicked === 3 ? null : "hidden"
            } w-full h-full flex flex-col gap-5 justify-center`}
          >
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiStyledcomponents className="text-5xl" />
              <div className="text-2xl">Styled-Components</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiTailwindcss className="text-5xl text-sky-500" />
              <div className="text-2xl">Tailwind</div>
            </div>
          </div>

          <div
            className={`${
              isClicked === 4 ? null : "hidden"
            } w-full h-full flex flex-col gap-5 justify-center`}
          >
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiPostman className="text-5xl text-orange-500" />
              <div className="text-2xl">Postman</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 w-1/4 px-5 py-3 rounded-full shadow-lg">
              <SiCloudflare className="text-5xl text-orange-500" />
              <div className="text-2xl">Cloudflare</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
