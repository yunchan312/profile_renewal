import photo from "../Assets/me.jpg";

export default function MainBar() {
  return (
    <div className="bg-slate-400 w-full min-h-[91vh] px-10 sm:mt-20 mt-10 flex flex-col justify-center items-center ">
      {/*<div className="flex flex-col w-full">
            <img src={photo} alt="me" className="md:w-2/3 w-full rounded" /> 
          </div>*/}
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
    </div>
  );
}
