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
import IconCard from "../Routes/Test/IconCard";
import CoverPage from "../Routes/Test/coverPage";
import ColoredTechSlider from "../Components/ColoredTechSlider";

export default function Techs() {
  return (
    <div className="w-full overflow-hidden">
      <ColoredTechSlider />
      <CoverPage />
      <ColoredTechSlider />
      <div
        id="icons"
        className="px-10 bg-[#fff200] overflow-hidden flex justify-center items-center"
      >
        <div className="text-2xl">
          <div>다양한 프레임워크, 라이브러리 등을 사용합니다.</div>
        </div>
        <div className="flex w-[70%] overflow-hidden">
          <div className="flex flex-wrap py-20 justify-end">
            <IconCard Icon={<SiReact />} text="React" />
            <IconCard Icon={<SiDocusaurus />} text="Docusaurus" />
            <IconCard Icon={<SiNextdotjs />} text="Next.js" />
            <IconCard Icon={<SiReactquery />} text="React-Query" />
            <IconCard Icon={<SiTypescript />} text="Typescript" />
            <IconCard Icon={<SiRecoil />} text="Recoil" />
            <IconCard Icon={<SiFramer />} text="Framer" />
            <IconCard Icon={<SiReacthookform />} text="Reacthookform" />
            <IconCard Icon={<SiStyledcomponents />} text="Styledcomponents" />
            <IconCard Icon={<SiTailwindcss />} text="Tailwindcss" />
            <IconCard Icon={<SiPostman />} text="Postman" />
            <IconCard Icon={<SiCloudflare />} text="Cloudflare" />
          </div>
        </div>
      </div>
    </div>
  );
}
