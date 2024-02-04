import Card from "../Components/Card";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import TextSlider from "../Components/TextSlider";
import { Link } from "react-router-dom";
import CustomModal from "../Components/Modal";
import { useRecoilValue } from "recoil";
import { ModalState } from "../atom";
import { ClimbingBoxLoader } from "react-spinners";

export default function Info() {
  const isModal = useRecoilValue(ModalState);

  return (
    <div className="bg-slate-400 py-10 px-10 min-h-[90vh]">
      {isModal ? <CustomModal /> : null}
      {
        <div className=" text-slate-400 font-bold md:text-[7vw] text-[10vw] px-10 flex bg-white justify-between">
          <div>ABOUT</div>
          <div>{`>>`}</div>
        </div>
      }
      <TextSlider />
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 items-center justify-around gap-7 text-slate-400">
        <Link to="https://github.com/yunchan312">
          <Card
            Icon={<IoLogoGithub />}
            title={"GITHUB"}
            content={<ClimbingBoxLoader color="rgb(255 255 255)" />}
          />
        </Link>
        <Link to="https://www.instagram.com/9uccichann/">
          <Card
            Icon={<FaInstagram />}
            title={"INSTAGRAM"}
            content={<ClimbingBoxLoader color="rgb(255 255 255)" size={5} />}
          />
        </Link>
        <Link to="https://www.notion.so/HOME-061d51c247f34f74b3b3d68aa270011f">
          <Card
            Icon={<SiNotion />}
            title={"NOTION"}
            content={<ClimbingBoxLoader color="rgb(255 255 255)" />}
          />
        </Link>
        <Card
          Icon={<MdOutlineEmail />}
          title={"EMAIL"}
          content={"phenomenal312@naver.com"}
          detail={"CONTACT_ME"}
        />
        <Card
          Icon={<FaSchool />}
          title={"UNIVERSITY"}
          content={"HANKUK UNIVERSITY OF FOREIGN STUDIES"}
          detail={"HUFS"}
        />
      </div>
    </div>
  );
}
