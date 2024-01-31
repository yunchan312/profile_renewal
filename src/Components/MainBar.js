import photo from "../Assets/me.jpg";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function MainBar() {
  return (
    <div className="bg-slate-400 w-full h-[100vh] flex items-center justify-center p-10 gap-5 mt-20">
      <img src={photo} alt="me" className="w-1/5 rounded-full" />
      <div className="flex flex-col">
        <div className="flex gap-10 items-center">
          <IoLogoGithub className="text-5xl" />
          <FaInstagram className="text-5xl" />
          <MdOutlineEmail className="text-5xl" />
        </div>
      </div>

      <div className="border-2 flex flex-col justify-center w-1/3 h-full gap-5">
        <div className="text-8xl font-bold">
          Koo
          <br />
          YunChann
        </div>
      </div>
    </div>
  );
}
