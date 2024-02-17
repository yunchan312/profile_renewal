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
      duration: 1.5,
      delay: 1.5,
    });
    gsap.to("#text2", {
      scrollTrigger: {
        trigger: "#p2",
        start: "top center",
      },

      height: "500px",
      opacity: 1,
      duration: 1.5,
      delay: 1.5,
    });
    gsap.to("#text3", {
      scrollTrigger: {
        trigger: "#p3",
        start: "top center",
      },

      height: "500px",
      opacity: 1,
      duration: 1.5,
      delay: 1.5,
    });
  }, []);
  return (
    <div className="p-20 w-full gap-10 flex flex-col">
      <div className="flex gap-10 items-center overflow-hidden">
        <div
          id="p1"
          className={`relative z-10 h-[500px] w-[0px] bg-coding bg-contain bg-left-top`}
        />
        <div
          id="text"
          className=" w-[50%] text-center h-[0px] opacity-0  flex flex-col justify-center py-10"
        >
          <div className="text-5xl font-bold">DEVELOPER</div>
          <div className="px-10 text-lg"></div>
        </div>
      </div>

      <div className="flex gap-10 items-center overflow-hidden">
        <div
          id="text2"
          className=" w-[50%] text-center h-[0px] opacity-0  flex flex-col justify-center py-10"
        >
          <div className="text-5xl font-bold">STUDENT</div>
          <div className="px-10 text-lg"></div>
        </div>
        <div
          id="p2"
          className={`relative z-10 h-[500px] w-[0px] bg-student bg-cover`}
        />
      </div>

      <div className="flex gap-10 items-center overflow-hidden">
        <div
          id="p3"
          className={`relative z-10 h-[500px] w-[0px] bg-night bg-cover`}
        />
        <div
          id="text3"
          className=" w-[50%] text-center h-[0px] opacity-0  flex flex-col justify-center py-10"
        >
          <div className="text-5xl font-bold">TRAVELER</div>
          <div className="px-10 text-lg"></div>
        </div>
      </div>
    </div>
  );
}
