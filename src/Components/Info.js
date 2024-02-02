import Card from "./Card";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import TextSlider from "./TextSlider";

export default function Info() {
  return (
    <div className="bg-slate-400 py-10 px-10 min-h-[90vh]">
      <div className=" text-slate-400 font-bold md:text-[7vw] text-[10vw] px-10 flex bg-white justify-between">
        <div>ABOUT</div>
        <div>{`>>`}</div>
      </div>
      <TextSlider />
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 items-center justify-around gap-7 text-slate-400">
        <Card Icon={<IoLogoGithub />} title={"Github"} />
        <Card Icon={<FaInstagram />} title={"Instagram"} />
        <Card Icon={<SiNotion />} title={"Notion"} />
        <Card Icon={<MdOutlineEmail />} title={"Email"} />
        <Card Icon={<FaSchool />} title={"University"} />
      </div>
    </div>
  );
}
