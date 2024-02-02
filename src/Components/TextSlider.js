import { useRef, useState } from "react";

export default function TextSlider() {
  const slideRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [customInterval, setCustomInterval] = useState(3000);
  const Arr = ["ABOUT ME", "ABOUT ME", "ABOUT ME", "ABOUT ME"];

  const useInterval = () => {
    setSlideIndex((slideIndex) => slideIndex + 1);
  };

  if (slideIndex === 5) {
    if (slideRef.current) {
      slideRef.current.style.transition = "";
    }
  }
  return (
    <div>
      <div
        className="border-2 text-white text-[7vw] font-bold overflow-hidden h-40"
        ref={slideRef}
        style={{
          transition: "all 4000ms ease-in-out",
          transform: `translateX(${-1 * 100}%) `,
        }}
      >
        <div>{Arr.map((a)=>(
            <div>{a}</div>
        ))}
        </div>
      </div>
    </div>
  );
}
