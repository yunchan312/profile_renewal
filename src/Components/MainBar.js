import Card from "./Card";
import photo from "../Assets/me.jpg";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

export default function MainBar() {
  return (
    <div className="bg-slate-400 w-full min-h-[98vh] sm:px-20 p-5 mt-20 ">
      <div className="sm:text-2xl text-lg pb-3 border-b-2 text-white">
        Front-end Developer
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 sm:py-20 py-10 gap-10">
        <div className="flex sm:px-20 items-start justify-center flex-col gap-5 ">
          <div className="flex flex-col w-full">
            <img src={photo} alt="me" className="md:w-2/3 w-full rounded" />
          </div>
          <div className="lg:text-8xl sm:text-6xl text-5xl w-full font-bold flex flex-col text-white justify-start items-start">
            Koo
            <br />
            YunChann
          </div>
        </div>

        <div className="w-full sm:px-20 flex flex-col items-center justify-around gap-7">
          <Card
            Icon={<IoLogoGithub />}
            title={"Github"}
            content={"yunchan312"}
          />
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
      </div>
    </div>
  );
}
