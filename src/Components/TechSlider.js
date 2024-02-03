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

export default function TechSlider() {
  const techList = [
    <SiTypescript />,
    <SiReact />,
    <SiDocusaurus />,
    <SiNextdotjs />,
    <SiReactquery />,
    <SiRecoil />,
    <SiFramer />,
    <SiReacthookform />,
    <SiStyledcomponents />,
    <SiTailwindcss />,
    <SiPostman />,
    <SiCloudflare />,
  ];

  const textTechList = [
    "NEXT",
    "REACT",
    "TYPESCRIPT",
    "DOCUSAURUS",
    "REACTQUERY",
    "RECOIL",
    "FRAMERMOTION",
    "REACTHOOKFORM",
    "STYLEDCOMPONENTS",
    "TAILWIND",
    "CLOUDFLARE",
    "POSTMAN",
  ];
  const coloredTextTechlist = [
    <span className="text-black">NEXT</span>,
    <span className="text-blue-400">REACT</span>,
    <span className="text-green-600">DOCUSAURUS</span>,
    <span className="text-black">REACTQUERY</span>,
    <span className="text-blue-500">RECOIL</span>,
    <span className="text-black">FRAMERMOTION</span>,
    <span className="text-orange-500">COULDFLARE</span>,
    <span className="text-blue-600">TYPESCRIPT</span>,
    <span className="text-pink-500">REACTHOOKFORM</span>,
    <span className="text-black">STYLEDCOMPONENTS</span>,
    <span className="text-sky-500">TAILWIND</span>,
    <span className="text-orange-500">POSTMAN</span>,
  ];
  const coloredTechList = [
    <SiFramer />,
    <SiTypescript className="text-blue-600" />,
    <SiReact className="text-blue-400" />,
    <SiDocusaurus className="text-green-600" />,
    <SiNextdotjs className="text-black" />,
    <SiRecoil className="text-blue-500" />,
    <SiReacthookform className="text-pink-500" />,
    <SiStyledcomponents className="text-black" />,
    <SiTailwindcss className="text-sky-500" />,
    <SiPostman className="text-orange-500" />,
    <SiReactquery className="text-black" />,
    <SiCloudflare className="text-orange-500" />,
  ];
  return (
    <div className="min-h-[95vh] pt-24">
      <div className="py-3">
        <div className="lg:text-[8vw] text-[10vw] font-bold flex flex-row-reverse flex-nowrap overflow-hidden">
          <div className="flex flex-nowrap animate-techSlider">
            {techList.map((text) => (
              <div className="mr-5">{text}</div>
            ))}
          </div>
          <div className="flex flex-nowrap animate-techSlider">
            {techList.map((text) => (
              <div className="mr-5">{text}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-h-[25vh]">
        <div className="lg:text-[8vw] text-[10vw] font-bold flex flex-nowrap overflow-hidden">
          <div className="flex flex-nowrap animate-textSlider">
            {textTechList.map((text) => (
              <div className="mr-5">{text}</div>
            ))}
          </div>
          <div className="flex flex-nowrap animate-textSlider">
            {textTechList.map((text) => (
              <div className="mr-5">{text}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="lg:text-[8vw] text-[10vw] font-bold flex flex-nowrap flex-row-reverse overflow-hidden">
          <div className="flex flex-nowrap animate-techSlider">
            {coloredTechList.map((text) => (
              <div className="mr-5">{text}</div>
            ))}
          </div>
          <div className="flex flex-nowrap animate-techSlider">
            {coloredTechList.map((text) => (
              <div className="mr-5">{text}</div>
            ))}
          </div>
        </div>
      </div>
      <div className=" max-h-[25vh]">
        <div className="lg:text-[8vw] text-[10vw] font-bold flex flex-nowrap overflow-hidden">
          <div className="flex flex-nowrap animate-textSlider">
            {coloredTextTechlist.map((text) => (
              <div className="mr-5">{text}</div>
            ))}
          </div>
          <div className="flex flex-nowrap animate-textSlider">
            {coloredTextTechlist.map((text) => (
              <div className="mr-5">{text}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
