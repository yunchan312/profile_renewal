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
    <div className="w-full min-h-[90vh] px-10 p-5 ">
      <div className="text-[3vw] py-3 border-b-8 border-t-8 border-slate-400 mb-10 text-slate-400 font-bold">
        #Technics
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col justify-center items-center gap-5 h-full w-1/3">
          <div
            onClick={() => onClick(1)}
            className={`${
              isClicked === 1 ? `animate-bounce` : null
            } border-b-slate-400 border-l-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg`}
          >
            Frameworks
          </div>
          <div
            onClick={() => onClick(2)}
            className={`${
              isClicked === 2 ? `animate-bounce` : null
            } border-b-slate-400 border-l-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg`}
          >
            libraries
          </div>
          <div
            onClick={() => onClick(3)}
            className={`${
              isClicked === 3 ? `animate-bounce` : null
            } border-b-slate-400 border-l-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg`}
          >
            styles
          </div>
          <div
            onClick={() => onClick(4)}
            className={`${
              isClicked === 4 ? `animate-bounce` : null
            } border-b-slate-400 border-l-slate-400 border-8 w-28 h-28 text-center font-bold rounded-full flex justify-center items-center hover:cursor-pointer hover:shadow-lg`}
          >
            ets
          </div>
        </div>

        <div className="w-full">
          <div
            className={`${
              isClicked === 0 ? null : "hidden"
            } text-slate-400 font-bold text-[9vw] text-center animate-pulse`}
          >
            ⇐ CLICK BUTTON
          </div>
          <div
            className={`${
              isClicked === 1 ? null : "hidden"
            } w-full flex flex-col gap-5 justify-center items-center h-full`}
          >
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiNextdotjs className="text-4xl" />
              <div className="sm:text-[2vw]">NEXT</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiReact className="text-4xl text-blue-400" />
              <div className="sm:text-[2vw]">React</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiTypescript className="text-4xl text-blue-600 rounded" />
              <div className="sm:text-[2vw]">Typescript</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiDocusaurus className="text-4xl text-green-600" />
              <div className="sm:text-[2vw]">docusaurus</div>
            </div>
          </div>

          <div
            className={`${
              isClicked === 2 ? null : "hidden"
            } w-full h-full flex flex-col gap-5 justify-center items-center`}
          >
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiReactquery className="text-4xl" />
              <div className="sm:text-[2vw]">React Query</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiRecoil className="text-5xl text-blue-500" />
              <div className="sm:text-[2vw]">Recoil</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiFramer className="text-5xl text-black" />
              <div className="sm:text-[2vw]">Framer-Motion</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiReacthookform className="text-5xl text-pink-500" />
              <div className="sm:text-[2vw]">React-Hook-From</div>
            </div>
          </div>

          <div
            className={`${
              isClicked === 3 ? null : "hidden"
            } w-full h-full flex flex-col gap-5 justify-center items-center`}
          >
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiStyledcomponents className="text-5xl" />
              <div className="sm:text-[2vw]">Styled-Components</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiTailwindcss className="text-5xl text-sky-500" />
              <div className="sm:text-[2vw]">Tailwind</div>
            </div>
          </div>

          <div
            className={`${
              isClicked === 4 ? null : "hidden"
            } w-full h-full flex flex-col gap-5 justify-center items-center`}
          >
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiPostman className="text-5xl text-orange-500" />
              <div className="sm:text-[2vw]">Postman</div>
            </div>
            <div className="flex items-center gap-2 border-slate-400 border-2 sm:w-1/2 w-full px-5 py-3 rounded-full shadow-lg">
              <SiCloudflare className="text-5xl text-orange-500" />
              <div className="sm:text-[2vw]">Cloudflare</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
