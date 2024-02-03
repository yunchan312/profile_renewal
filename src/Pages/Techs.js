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
import TechSlider from "../Components/TechSlider";
import ColoredTechSlider from "../Components/ColoredTechSlider";

export default function Techs() {
  const [isClicked, setIsClicked] = useState(1);
  const onClick = (num) => {
    setIsClicked(num);
  };
  return (
    <div className="w-full min-h-[100vh] ">
      <TechSlider />
      <ColoredTechSlider />
      <div className="flex flex-col justify-center items-center font-bold z-40 w-full backdrop-blur-xl bg-opacity-40 py-10 h-full absolute">
        <div className="w-[90%] flex items-center justify-center lg:text-[8vw] text-[14vw] text-slate-400">
          <span>#TECHNICS</span>
        </div>
        <div className="flex flex-col w-full items-center gap-2 py-10">
          <div className="flex justify-center items-center gap-10 h-full w-full flex-wrap">
            <div
              onClick={() => onClick(1)}
              className={`${
                isClicked === 1 ? `animate-bounce` : null
              } border-b-slate-400  border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg bg-white`}
            >
              Frameworks
            </div>
            <div
              onClick={() => onClick(2)}
              className={`${
                isClicked === 2 ? `animate-bounce` : null
              } border-b-slate-400 border-l-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg bg-white`}
            >
              libraries
            </div>
            <div
              onClick={() => onClick(3)}
              className={`${
                isClicked === 3 ? `animate-bounce` : null
              } border-b-slate-400 border-l-slate-400 border-t-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg bg-white`}
            >
              styles
            </div>
            <div
              onClick={() => onClick(4)}
              className={`${
                isClicked === 4 ? `animate-bounce` : null
              } border-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg bg-white`}
            >
              ets
            </div>
          </div>

          <div className="w-full">
            <div
              className={`${
                isClicked === 1 ? null : "hidden"
              } w-full flex flex-col gap-5 justify-center items-center h-full`}
            >
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiNextdotjs className="text-4xl" />
                <div className="sm:text-[2vw]">NEXT</div>
              </div>
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiReact className="text-4xl text-blue-400" />
                <div className="sm:text-[2vw]">React</div>
              </div>
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiTypescript className="text-4xl text-blue-600 rounded" />
                <div className="sm:text-[2vw]">Typescript</div>
              </div>
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiDocusaurus className="text-4xl text-green-600" />
                <div className="sm:text-[2vw]">docusaurus</div>
              </div>
            </div>

            <div
              className={`${
                isClicked === 2 ? null : "hidden"
              } w-full h-full flex flex-col gap-5 justify-center items-center`}
            >
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiReactquery className="text-4xl" />
                <div className="sm:text-[2vw]">React Query</div>
              </div>
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiRecoil className="text-5xl text-blue-500" />
                <div className="sm:text-[2vw]">Recoil</div>
              </div>
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiFramer className="text-5xl text-black" />
                <div className="sm:text-[2vw]">Framer-Motion</div>
              </div>
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiReacthookform className="text-5xl text-pink-500" />
                <div className="sm:text-[2vw]">React-Hook-From</div>
              </div>
            </div>

            <div
              className={`${
                isClicked === 3 ? null : "hidden"
              } w-full h-full flex flex-col gap-5 justify-center items-center`}
            >
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiStyledcomponents className="text-5xl" />
                <div className="sm:text-[2vw]">Styled-Components</div>
              </div>
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiTailwindcss className="text-5xl text-sky-500" />
                <div className="sm:text-[2vw]">Tailwind</div>
              </div>
            </div>

            <div
              className={`${
                isClicked === 4 ? null : "hidden"
              } w-full h-full flex flex-col gap-5 justify-center items-center`}
            >
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiPostman className="text-5xl text-orange-500" />
                <div className="sm:text-[2vw]">Postman</div>
              </div>
              <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg bg-white">
                <SiCloudflare className="text-5xl text-orange-500" />
                <div className="sm:text-[2vw]">Cloudflare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechSlider />
      <ColoredTechSlider />
      <TechSlider />
      <ColoredTechSlider />
      <TechSlider />
    </div>
  );
}
