import Btn from "../Components/Btn";
import {
  Typescript,
  ReactIcon,
  IconStyledcomponents,
  IconReactquery,
  IconFramer,
  IconTailwind,
  IconNextjs,
  Javascript,
} from "../Assets/Icons";

export default function Projects() {
  return (
    <div className="min-h-[100vh] w-full flex flex-col p-10 gap-5 bg-slate-400">
      <div className="text-[5vw] text-center pb-3 border-b-8 border-white mb-10 text-white font-bold">
        #PROJECTS
      </div>
      <div>
        <Btn />
        <div className="text-xl grid grid-cols-2 gap-5">
          <div>profile</div>
          <div>Netflix_Cloning</div>
          <div>CoupangPlay_Cloning</div>
          <div>Number_Game_TS</div>
          <div>CarrotMarket_Cloning</div>
          <div>Coins</div>
          <div>Study_Flex</div>
          <div>Stop_Smoke</div>
        </div>
      </div>
    </div>
  );
}
