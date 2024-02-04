import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Btn({ context, name, content, github, img }) {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleBoxClick = () => {
    setIsBoxVisible((prev) => !prev);
  };

  const detailVariants = {
    before: {
      display: "none",
      scale: 0,
    },
    isOpen: {
      display: "block",
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        scale: {
          type: "spring",
        },
      },
    },
  };
  const coverVariants = {
    first: {
      width: "70%",
    },
    isClose: {
      visibility: "visible",
      width: ["60%", "100%", "2%"],
    },
    transition: {
      times: [1, 1, 1],
    },
  };

  return (
    <div className="flex flex-col justify-start w-[90vw]">
      <motion.div
        animate={isBoxVisible ? "isClose" : null}
        initial={"first"}
        variants={coverVariants}
        onClick={handleBoxClick}
        className="bg-white py-10 relative z-20 w-[60vw] select-none hover:cursor-pointer "
      >
        <div className="px-10">
          <div
            className={`${
              isBoxVisible ? "text-white" : "text-slate-400"
            } font-bold text-[8vw] flex justify-between items-center`}
          >
            <span className="">{name}</span>
            {isBoxVisible ? null : (
              <>
                <span className="">
                  <span className="animate-arrowSecond">{">"}</span>
                  <span className="animate-arrowThird">{">"}</span>
                </span>
              </>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={"before"}
        animate={isBoxVisible ? "isOpen" : null}
        variants={detailVariants}
        className="text-[2vw] w-full px-10 ml-2"
      >
        <div className="w-[100%]">
          <div>{img ? <div>hello</div> : null}</div>
          <div>
            <div>{context}</div>
            <Link to={`${github}`}>
              <div>코드보기</div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
