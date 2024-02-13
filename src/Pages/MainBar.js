import photo from "../Assets/me.jpg";
import mango from "../Assets/mango.jpg";
import { useScroll, motion, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MainBar() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0%", "10%"],
  });
  const opacity = useSpring(scrollYProgress, {
    opacity: 1,
  });
  const scale = useSpring(scrollYProgress, {
    scale: 1.1,
  });
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
      <div className="bg-slate-400 h-[100vh] pr-10 flex justify-between items-center relative overflow-hidden w-full">
        <div className="w-[30vw] h-full bg-slate-400 relative z-20 font-bold text-white p-10 text-9xl  flex flex-col justify-center">
          <motion.div style={{ opacity }} className="text-[70%]">
            DEVELOPER,
          </motion.div>
          <motion.div style={{ opacity }} className="text-[70%]">
            HUSTLER,
          </motion.div>
          <motion.div style={{ opacity }} className="text-[70%]">
            TRAVELER
          </motion.div>
        </div>
        <div className=" w-full h-full pr-10 flex justify-center items-center overflow-hidden absolute">
          <motion.img
            style={{ scale }}
            src={photo}
            className="w-[70%]  absolute z-10"
          ></motion.img>
        </div>
      </div>
    </div>
  );
}
