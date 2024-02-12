import { motion, useScroll, useSpring } from "framer-motion";
import Btn from "../Components/Btn";
import { useRef } from "react";
import mango from "../Assets/mango.jpg";

export default function Test() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0%", "60%"],
  });
  const scale = useSpring(scrollYProgress, {
    scale: 2,
  });
  const changeScaleX = useSpring(scrollYProgress, {
    scaleX: 0.2,
  });
  return (
    <>
      <div className="bg-orange-500 h-[100vh] flex flex-col justify-center items-center w-full border-2">
        {
          <motion.div
            whileHover={{
              opacity: 1,
              scale: [1, 2, 2, 1, 1],
              rotate: [-25, 0, 180, 180, -25],
              width: ["30vw", "30vw", "30vw", "50vw", "90vw"],
              borderRadius: ["0%", "100%", "0%", "0%", "0%"],
            }}
            transition={{
              duration: 2,
            }}
            className="bg-white w-[90vw] h-[30vh] rounded-sm border-2"
          >
            {/*<motion.div
            initial={{ display: "none", scale: 1.5 }}
            animate={{ display: "block", scale: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "linear",
              delayChildren: 0.6,
              type: "spring",
            }}
            className="font-bold text-9xl"
          ></motion.div> */}
          </motion.div>
        }
      </div>
      <div className="bg-blue-500 h-[100vh] flex flex-col justify-center items-center w-full border-2">
        {
          <motion.circle
            cx={500}
            animate={{ cx: [null, 100, 200] }}
            transition={{ duration: 3, times: [0, 0.2, 1] }}
            className="bg-white w-[30vw] h-[30vh] rounded-sm border-2"
          ></motion.circle>
        }
      </div>

      <div className="bg-yellow-500 h-[100vh] pr-10">
        <Btn name={"PROFILE"} />
      </div>
      <div className="bg-green-500 h-[100vh] pr-10 flex justify-between items-center relative overflow-hidden">
        <div className="w-[30vw] h-full bg-orange-500 relative z-20 font-bold text-white p-10 text-9xl">
          MANGO
        </div>
        <div className="bg-orange-500 w-full h-[100vh] pr-10 flex justify-center items-center overflow-hidden absolute">
          <motion.img
            style={{ scale }}
            src={mango}
            className="w-[50vw] bg-white border-2 border-red-500 absolute z-10"
          ></motion.img>
        </div>
        <div className="w-[30vw] h-full bg-orange-500 relative z-20"></div>
      </div>
      <div className="bg-slate-500 h-[100vh] pr-10 flex justify-center items-center ">
        <motion.div className="w-[100px] h-[100px] bg-white"></motion.div>
      </div>
    </>
  );
}
