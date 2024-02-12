import photo from "../Assets/me.jpg";
import { useScroll, motion, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MainBar() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scaleX = useSpring(scrollYProgress);
  return (
    <div className="bg-slate-400 w-full min-h-[91vh] px-10 sm:mt-20 mt-10 flex flex-col justify-center items-center ">
      <div className="self-start text-[12vw] w-full text-white font-bold flex md:flex-nowrap flex-wrap">
        <span>KOO</span>
        <span>YUNCHANN</span>
      </div>
      <div className="text-[3vw] w-full py-3 border-y-8 text-white flex justify-between font-bold">
        <div>FRONT-END DEVELOPER</div>
        <div>#CREATIVE #PASSIONATE</div>
      </div>
      <div className="text-[9vw] self-end text-white font-bold">
        IT'S PHENOMENAL
      </div>
      <div className="border-2 w-full flex">
        <div className="bg-black h-[40vw] w-[40vw] border-red-500 border-2 relative z-20"></div>
        <motion.div
          ref={ref}
          style={{ scaleX }}
          className="flex border-2 bg-photo1 w-[40vw] h-[40vw] bg-cover relative z-10"
        />
        <div className="bg-black h-[40vw] w-[40vw] border-red-500 border-2 relative z-20"></div>
      </div>
    </div>
  );
}
