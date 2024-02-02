import Card from "./Card";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { SiNotion, SiPhonepe } from "react-icons/si";

export default function Info() {
  return (
    <div className="bg-slate-400 py-10 min-h-[90vh] grid md:grid-cols-2 grid-cols-1">
      <div className=" text-white font-bold md:text-[7vw] text-[10vw] px-10 mb-10">
        ALL I NEED IS FINGER TO PRESS MOUSE
      </div>
      <div className="w-full md:px-20 px-10 grid lg:grid-cols-2 grid-cols-1 items-center justify-around gap-7 ">
        <Card Icon={<IoLogoGithub />} title={"Github"} content={"yunchan312"} />
        <Card
          Icon={<FaInstagram />}
          title={"Instagram"}
          content={"@9uccichann"}
        />
        <Card Icon={<SiNotion />} title={"Notion"} />
        <Card Icon={<FaPhone />} title={"Phone"} />

        <Card
          Icon={<MdOutlineEmail />}
          title={"Email"}
          content={"phenomena312@naver.com"}
        />
        <Card
          Icon={<FaSchool />}
          title={"University"}
          content={"Hankuk Universiy of Foreign Studies"}
        />
      </div>
    </div>
  );
}
