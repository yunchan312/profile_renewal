import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger, TextPlugin } from "gsap/all";

export default function CoverPage() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    gsap.to("#category", {
      scrollTrigger: {
        trigger: "#cover",
        start: "80% bottom",
      },
      duration: 2,
      delay: 0.5,
      text: "TECHNICS",
      ease: "back",
    });
  }, []);
  return (
    <div id="cover" className="h-[50vh] flex justify-center items-center">
      <div id="category" className="font-bold text-7xl">
        OXOXOXOX
      </div>
    </div>
  );
}
