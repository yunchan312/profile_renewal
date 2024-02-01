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
  FaCloudflare,
} from "react-icons/si";

export default function Techs() {
  const [isClicked, setIsClicked] = useState(0);
  const onClick = (num) => {
    if (isClicked == 0) {
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
            className="border-slate-400 border-8 w-28 h-28 text-center rounded-full flex justify-center items-center"
          >
            frameworks
          </div>
          <div
            onClick={() => onClick(2)}
            className="border-slate-400 border-8 w-28 h-28 text-center rounded-full flex justify-center items-center"
          >
            libraries
          </div>
          <div
            onClick={() => onClick(3)}
            className="border-slate-400 border-8 w-28 h-28 text-center rounded-full flex justify-center items-center"
          >
            styles
          </div>
          <div
            onClick={() => onClick(4)}
            className="border-slate-400 border-8 w-28 h-28 text-center rounded-full flex justify-center items-center"
          >
            ets
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className={`${
              isClicked == 1 ? null : "hidden"
            } border-2 w-full h-full `}
          >
            <div className="flex items-center gap-2">
              <SiNextdotjs className="text-5xl" />
              <div className="text-2xl">NEXT</div>
            </div>
            <div className="flex items-center gap-2">
              <SiReact className="text-5xl text-blue-400" />
              <div className="text-2xl">React</div>
            </div>
            <div className="flex items-center gap-2">
              <SiTypescript className="text-5xl text-blue-600 rounded" />
              <div className="text-2xl">Typescript</div>
            </div>
            <div className="flex items-center gap-2">
              <SiDocusaurus className="text-5xl text-green-600" />
              <div className="text-2xl">docusaurus</div>
            </div>
          </div>
        </div>
        <br />
        <div>
          <div className={`${isClicked == 2 ? null : "hidden"}`}>
            <div>react query</div>
            <div>recoil</div>
            <div>framermotion</div>
            <div>react-hook-form</div>
          </div>
        </div>
        <br />
        <div>
          <div className={`${isClicked == 3 ? null : "hidden"}`}>
            <div>styled components</div>
            <div>tailwind</div>
          </div>
        </div>
        <br />
        <div>
          <div className={`${isClicked == 4 ? null : "hidden"}`}>
            <div>postman</div>
            <div>cloudflare</div>
          </div>
        </div>
      </div>
    </div>
  );
}
