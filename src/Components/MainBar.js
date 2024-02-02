import photo from "../Assets/me.jpg";

export default function MainBar() {
  return (
    <div className="bg-slate-400 w-full min-h-[91vh] px-10 sm:mt-20 mt-10 ">
      {/*<div className="flex flex-col w-full">
            <img src={photo} alt="me" className="md:w-2/3 w-full rounded" /> 
          </div>*/}
      <div className="md:text-[12vw] text-[10vw] text-center text-white font-bold">
        KOOYUNCHANN
      </div>
      <div className="text-[3vw] py-3 border-y-8 text-white flex justify-between font-bold">
        <div>FRONT-END DEVELOPER</div>
        <div>#CREATIVE #PASSIONATE</div>
      </div>
      <div className="text-[8vw] text-white font-bold">
        DO MY BEST TO BE A PHENOMENAL DEVELOPER
      </div>
    </div>
  );
}
