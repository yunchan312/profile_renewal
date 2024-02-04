import Btn from "../Components/Btn";

export default function Projects() {
  return (
    <div className="min-h-[100vh] w-full flex flex-col p-10 gap-5 bg-slate-400">
      <div className="w-full text-white font-bold text-[7vw]">#PROJECTS</div>
      <div className="text-[3vw] w-full py-3 border-y-8 text-white flex justify-between font-bold">
        <div> AS FRONT-END DEVELOPER</div>
        <div>#CREATIVE #PASSIONATE</div>
      </div>
      <Btn
        key={0}
        name={"PROFILE"}
        context={"포트폴리오 페이지로서 제 정보를 소개 하는 웹사이트 입니다."}
        github={"https://github.com/yunchan312/profile_renewal"}
      />
      <Btn
        key={1}
        name={"COINS"}
        context={
          "실시간 가상화폐의 가격을 그래프와 여러가지 지표를 활용해서 표시하는 웹사이트입니다."
        }
        github={"https://github.com/yunchan312/Coins"}
      />
      <Btn
        key={2}
        name={"STUDY_FLEX"}
        context={
          "대학교 인증을 통해, 본인이 소속된 대학교 안에서 스터디멤버를 모집하는 플랫폼입니다."
        }
        github={"https://github.com/StudyFlexUMC5th/StudyFlex-FE"}
      />
      <Btn
        key={3}
        name={"CLONINGS"}
        context={"Netflix Cloning, CoupangPlay Cloning, CarrotMarket Cloning"}
        github={"https://github.com/yunchan312?tab=repositories"}
      />
      <Btn
        key={4}
        name={"STOP_SMOKE"}
        context={"작업중입니다."}
        github={"https://github.com/yunchan312?tab=repositories"}
      />
    </div>
  );
}
