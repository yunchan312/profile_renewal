import { useState } from "react";

export default function Btn({ key, name, content }) {
  const [isEven, setIsEven] = useState(key % 2);
  return (
    <div className="bg-white">
      <div className="px-10">
        {isEven !== 0 ? (
          <div className="text-slate-400 font-bold text-[10vw] flex justify-between items-center">
            <span>
              {name} {key}
            </span>
            <span>
              <span className="animate-arrowFirst">{">"}</span>
              <span className="animate-arrowSecond">{">"}</span>
              <span className="animate-arrowThird">{">"}</span>
            </span>
          </div>
        ) : (
          <div className="text-slate-400 font-bold text-[10vw] flex justify-between items-center">
            <span>
              <span className="animate-arrowFirst">{"<"}</span>
              <span className="animate-arrowSecond">{"<"}</span>
              <span className="animate-arrowThird">{"<"}</span>
            </span>
            <span>{name}</span>
          </div>
        )}
      </div>
      <div className="px-10">{content}</div>
    </div>
  );
}
