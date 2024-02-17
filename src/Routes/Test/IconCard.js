import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

export default function IconCard({ Icon, text }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to("#icon", {
      scrollTrigger: {
        trigger: "#icons",
      },
      y: "-192px",
      duration: 0.7,
      opacity: 1,
      stagger: 0.2,
    });
  }, []);
  return (
    <>
      <div
        id="icon"
        className="w-[200px] flex flex-col justify-center items-center text-center opacity-0 relative top-48 py-5"
      >
        <div className="text-7xl">{Icon}</div>
        <div className="text-xl">
          <div>&lt;{text}&gt;</div>
        </div>
      </div>
    </>
  );
}
