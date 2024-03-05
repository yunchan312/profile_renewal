import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

export default function ScrollSize() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to("#p1", {
      scrollTrigger: {
        trigger: "#p1",
        start: "top center",
        end: "bottom center",
      },
      width: "820px",
      opacity: 1,
      duration: 1.5,
    });
    gsap.to("#p2", {
      scrollTrigger: {
        trigger: "#p2",
        start: "top center",
        end: "bottom center",
      },
      width: "820px",
      opacity: 1,
      duration: 1.5,
    });
    gsap.to("#p3", {
      scrollTrigger: {
        trigger: "#p3",
        start: "top center",
        end: "bottom center",
      },
      width: "820px",
      opacity: 1,
      duration: 1.5,
    });

    gsap.to("#text", {
      scrollTrigger: {
        trigger: "#p1",
        start: "top center",
      },
      height: "500px",
      opacity: 1,
      duration: 1,
      delay: 1.3,
    });
    gsap.to("#text2", {
      scrollTrigger: {
        trigger: "#p2",
        start: "top center",
      },

      height: "500px",
      opacity: 1,
      duration: 1,
      delay: 1.3,
    });
    gsap.to("#text3", {
      scrollTrigger: {
        trigger: "#p3",
        start: "top center",
      },

      height: "500px",
      opacity: 1,
      duration: 1,
      delay: 1.3,
    });
  }, []);
  return (
    <div className="p-20 w-full gap-48 flex flex-col">
      <div className="flex gap-10 items-center overflow-hidden">
        <div
          id="p3"
          className={`relative z-10 h-[500px] w-[0px] bg-night bg-cover`}
        />
        <div
          id="text3"
          className=" w-[50%] px-10 h-[0px] opacity-0  flex flex-col justify-center py-10"
        >
          <div className="text-5xl font-bold">TRAVELER</div>
          <div className="text-lg">
            여행을 통해 일상에서 벗어나 휴식하는 것 뿐만 아니라
            <br /> 다양한 경험을 쌓고 식견을 넓히는 <strong>'여행가'</strong>
            입니다.
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-center overflow-hidden">
        <div
          id="text2"
          className=" w-[50%] px-10 h-[0px] opacity-0  flex flex-col justify-center items-end py-10"
        >
          <div className="text-5xl font-bold">STUDENT</div>
          <div className="text-lg">
            기술과 컴퓨터를 탐구하고 연구하는 컴퓨터 <strong>'공학학도'</strong>
            입니다.
          </div>
        </div>
        <div
          id="p2"
          className={`relative z-10 h-[500px] w-[0px] bg-student bg-cover`}
        />
      </div>

      <div className="flex gap-10 items-center overflow-hidden">
        <div
          id="p1"
          className={`relative z-10 h-[500px] w-[0px] bg-coding bg-cover bg-right`}
        />
        <div
          id="text"
          className=" w-[50%] px-10 h-[0px] opacity-0  flex flex-col justify-center py-10"
        >
          <div className="text-5xl font-bold">DEVELOPER</div>
          <div className="text-lg">
            개발을 좋아하고 즐기는 <strong>'개발자'</strong>입니다.
            <br />
            개인 개발 및 협업을 통해 만들고자 하는 서비스나 프로그램을
            개발합니다.
          </div>
        </div>
      </div>
    </div>
  );
}
