import Btn from "./Btn";
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
    <div className="border-2 w-full h-[500px] flex flex-col p-10 gap-5">
      <div className="text-2xl font-semibold">Projects</div>
      <div>
        <div className="text-xl grid grid-cols-2 gap-5">
          <Btn
            name="profile"
            techs={[
              <Typescript width="40px" />,
              <ReactIcon width="40px" />,
              <IconTailwind width="40px" />,
              <IconFramer width="40px" />,
            ]}
          ></Btn>
          <Btn
            name="Netflix_Cloning"
            techs={[
              <Typescript width="40px" />,
              <ReactIcon width="40px" />,
              <IconStyledcomponents width="40px" />,
              <IconFramer width="40px" />,
              <IconReactquery width="40px" />,
            ]}
          ></Btn>
          <Btn
            name="CoupangPlay_Cloning"
            techs={[
              <Typescript width="40px" />,
              <ReactIcon width="40px" />,
              <IconStyledcomponents width="40px" />,
              <IconFramer width="40px" />,
              <IconReactquery width="40px" />,
            ]}
          ></Btn>
          <Btn
            name="Number_Game_TS"
            techs={[<Typescript width="40px" />, <ReactIcon width="40px" />]}
          ></Btn>
          <Btn
            name="CarrotMarket_Cloning"
            techs={[
              <Typescript width="40px" />,
              <IconNextjs width="40px" />,
              <IconTailwind width="40px" />,
            ]}
          ></Btn>
          <Btn
            name="Coins"
            techs={[
              <Typescript width="40px" />,
              <ReactIcon width="40px" />,
              <IconStyledcomponents width="40px" />,
            ]}
          ></Btn>
          <Btn
            name="Study_Flex"
            techs={[
              <Javascript width="40px" />,
              <ReactIcon width="40px" />,
              <IconTailwind width="40px" />,
            ]}
          ></Btn>
          <Btn
            name="Stop_Smoke"
            techs={[<ReactIcon width="40px" />, <IconTailwind width="40px" />]}
          ></Btn>
        </div>
      </div>
    </div>
  );
}
