import Card from "./Card";
import photo from "../Assets/me.jpg";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

export default function MainBar() {
  return (
    <div className="bg-slate-400 w-full h-[98vh] px-40 p-5 mt-20">
      <div className="text-2xl pb-3 border-b-2 text-white">
        Front-end Developer
      </div>
      <div className="flex justify-between p-20 ">
        <div className="flex items-start flex-col">
          <div className="flex flex-col">
            <img src={photo} alt="me" className="w-96 rounded" />
          </div>

          <div className="flex flex-col justify-center w-1/3">
            <div className="text-9xl font-bold text-white">
              Koo
              <br />
              YunChann
            </div>
          </div>
        </div>
        <div className=" w-1/2 flex flex-col items-center justify-around">
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
