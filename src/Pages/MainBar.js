import { gsap } from "gsap";
import { useEffect } from "react";
import { TextPlugin, MotionPathPlugin, EasePack } from "gsap/all";

export default function MainBar() {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(EasePack);
  useEffect(() => {
    gsap.to("#name", {
      duration: 0.7,
      opacity: 1,
      text: "KOO<br/>YUNCHANN",
      ease: "none",
      delay: 1,
    });
    gsap.to("#me", {
      duration: 2,
      y: -100,
      opacity: 1,
    });
    gsap.to("#extra", {
      duration: 1,
      opacity: 1,
      delay: 2,
    });
  }, []);
  return (
    <div
      id="bg"
      className="w-full px-10 flex flex-col justify-center items-center py-20 gap-10"
    >
      <div className="flex gap-10 h-full justify-center items-center">
        <div
          id="me"
          className="bg-me w-[1000px] h-[700px] bg-cover opacity-0 relative top-24 shadow-xl"
        />
        <div className="h-[500px] flex flex-col justify-center items-center">
          <div id="name" className="font-bold text-[4vw] opacity-0">
            312
            <br />
            20010312
          </div>
          <div id="extra" className="w-full py-3 opacity-0">
            <div className="text-[2vw]">FRONT-END DEVELOPER</div>
            <div id="content" className="text-xl">
              탐구하고, 연구하고, 소통하는
              <br />
              개발자를 꿈꾸는 학생입니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
