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

  return (
    <div className="max-h-[100vh] flex-col overflow-hidden">
      <div className="py-3 max-h-[25vh]">
        <div className="lg:text-[8vw] text-[16vw] font-bold flex flex-row-reverse flex-nowrap overflow-hidden">
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
      <div className="py-3 max-h-[25vh]">
        <div className="lg:text-[8vw] text-[16vw] font-bold flex flex-nowrap overflow-hidden">
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
    </div>
  );
}
