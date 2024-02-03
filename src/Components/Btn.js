import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Btn({ key, name, content }) {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleBoxClick = () => {
    setIsBoxVisible((prev) => !prev);
  };

  return (
    <div>
      <div onClick={handleBoxClick} className="bg-white py-10">
        <div className="px-10">
          <div className="text-slate-400 font-bold text-[10vw] flex justify-between items-center">
            <span>{name}</span>
            <span className="rotate-90">
              <span className="animate-arrowSecond">{">"}</span>
              <span className="animate-arrowThird">{">"}</span>
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center relative">
          <div
            className={`bg-slate-400 w-[95%] h-[400px] py-20 ${
              isBoxVisible ? "animate-slideDown" : null
            }`}
          >
            <span className="text-white font-bold text-[10vw] flex justify-between items-center">
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
