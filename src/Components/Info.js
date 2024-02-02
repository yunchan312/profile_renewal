import Card from "./Card";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

export default function Info() {
  return (
    <div className="w-full sm:px-20 flex flex-col items-center justify-around gap-7">
      <Card Icon={<IoLogoGithub />} title={"Github"} content={"yunchan312"} />
      <Card
        Icon={<FaInstagram />}
        title={"Instagram"}
        content={"@9uccichann"}
      />
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
  );
}
