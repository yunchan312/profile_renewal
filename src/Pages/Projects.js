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
      <div className="w-full text-white font-bold text-[7vw]">#PROJECTS</div>
      <div className="text-[3vw] w-full py-3 border-y-8 text-white flex justify-between font-bold">
        <div> AS FRONT-END DEVELOPER</div>
        <div>#CREATIVE #PASSIONATE</div>
      </div>
      <Btn key={0} name={"PROFILE"} />
      <Btn key={1} name={"COINS"} />
      <Btn key={2} name={"STUDY FLEX"} />
      <Btn key={3} name={"CLONINGS"} />
      <Btn key={4} name={"NO MORE SMOKE"} />
    </div>
  );
}
