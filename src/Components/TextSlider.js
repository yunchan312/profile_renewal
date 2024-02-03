import { useEffect, useRef, useState } from "react";

export default function TextSlider() {
  const Arr = ["ABOUT", "ME ", "ABOUT", "ME ", "ABOUT", "ME ", "ABOUT", "ME "];

  return (
    <div>
      <div className="text-white sm:text-[10vw] text-[12vw] font-bold flex flex-nowrap overflow-hidden">
        <div className="flex flex-nowrap animate-slider">
          {Arr.map((text) => (
            <div className="mr-5">{text}</div>
          ))}
        </div>
        <div className="flex flex-nowrap animate-slider">
          {Arr.map((text) => (
            <div className="mr-5">{text}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
