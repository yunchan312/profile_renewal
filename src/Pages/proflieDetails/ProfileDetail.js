import { useEffect } from "react";
import {
  SiReact,
  SiRecoil,
  SiFramer,
  SiTailwindcss,
  SiCloudflare,
} from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function ProflioDetail() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none", duration: 2 });
  const tl = gsap.timeline();
  useEffect(() => {
    tl.from("#green", { xPercent: -100 }).from("#blue", { xPercent: 100 });
    ScrollTrigger.create({
      animation: tl,
      trigger: "#container",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  }, []);

  return (
    <>
      <div
        id="white container"
        className="my-10 flex flex-col justify-center px-24 h-[90vh] absolute z-10"
      >
        <div className="text-5xl font-bold">PROFILE</div>
        <div className="flex justify-start items-center gap-10 p-5 ">
          <div className="bg-portfolio w-[40%] h-[400px] bg-cover bg-center shadow-xl" />
          <div className="w-[50%] flex flex-col gap-5">
            <div>
              <span className="text-3xl font-bold">Techs</span>
              <div className="flex gap-2 text-6xl items-center">
                <SiReact />
                <SiRecoil />
                <SiFramer />
                <span className="font-extrabold text-4xl">GSAP</span>
                <SiTailwindcss />
                <SiCloudflare />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold">About</span>
              <div>
                저의 포트폴리오 웹사이트입니다. 제 자신에 대한 간략한 소개와
                기술 스택, 프로젝트 등 제가 공부하면서 배운 것들과 경험들을
                넣어둔 웹사이트입니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="green container"
        className="my-10 flex flex-col justify-center px-24 h-[90vh] bg-green-400 absolute z-20"
      >
        <div className="text-5xl font-bold">PROFILE</div>
        <div className="flex justify-start items-center gap-10 p-5 ">
          <div className="bg-portfolio w-[40%] h-[400px] bg-cover bg-center shadow-xl" />
          <div className="w-[50%] flex flex-col gap-5">
            <div>
              <span className="text-3xl font-bold">Techs</span>
              <div className="flex gap-2 text-6xl items-center">
                <SiReact />
                <SiRecoil />
                <SiFramer />
                <span className="font-extrabold text-4xl">GSAP</span>
                <SiTailwindcss />
                <SiCloudflare />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold">About</span>
              <div>
                저의 포트폴리오 웹사이트입니다. 제 자신에 대한 간략한 소개와
                기술 스택, 프로젝트 등 제가 공부하면서 배운 것들과 경험들을
                넣어둔 웹사이트입니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="blue container"
        className="my-10 flex flex-col justify-center px-24 h-[90vh] bg-blue-400 absolute z-30"
      >
        <div className="text-5xl font-bold">PROFILE</div>
        <div className="flex justify-start items-center gap-10 p-5 ">
          <div className="bg-portfolio w-[40%] h-[400px] bg-cover bg-center shadow-xl" />
          <div className="w-[50%] flex flex-col gap-5">
            <div>
              <span className="text-3xl font-bold">Techs</span>
              <div className="flex gap-2 text-6xl items-center">
                <SiReact />
                <SiRecoil />
                <SiFramer />
                <span className="font-extrabold text-4xl">GSAP</span>
                <SiTailwindcss />
                <SiCloudflare />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold">About</span>
              <div>
                저의 포트폴리오 웹사이트입니다. 제 자신에 대한 간략한 소개와
                기술 스택, 프로젝트 등 제가 공부하면서 배운 것들과 경험들을
                넣어둔 웹사이트입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}