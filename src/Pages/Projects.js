import Btn from "../Components/Btn";

export default function Projects() {
  return (
    <div className="p-24">
      <div className="flex justify-center items-center gap-10 my-24">
        <div
          className={`bg-portfolio bg-cover bg-center rounded  h-[400px] w-[30%] shadow-xl`}
        />
        <Btn
          title={"PROFILE"}
          nav="profile"
          content="저의 포트폴리오 웹사이트입니다. 제 자신에 대한 간략한 소개와
기술 스택, 프로젝트 등 제가 공부하면서 배운 것들과 경험들을 넣어둔 웹사이트입니다."
        />
      </div>
      <div className="flex justify-center items-center gap-10 my-24">
        <div
          className={`bg-studyFlex bg-cover bg-center rounded  h-[400px] w-[30%] shadow-xl`}
        />
        <Btn
          title="STUDY-FLEX"
          content="대학 안에서 학생들이 스터디를 만들고 운영하는 것을 돕는 서비스입니다.
저와 제 팀원들은 스터디를 구성하는 것에 어려움을 많이 겪었습니다. 더 나아가 불특정 다수가 모이는 기존의 플랫폼은 변수가 많다는 불편함이 있다는 것을 확인했습니다. 따라서 대학교 인증을 통해 같은 학교 학우들로 스터디를 구성하여 변수를 줄이고, 더 나아가 교내에서의 네트워크를 형성할 수 있는 서비스 플랫폼을 개발 및 운영했습니다."
        />
      </div>
      <div className="flex justify-center items-center gap-10 my-24">
        <div
          className={`bg-quit bg-cover bg-center rounded  h-[400px] w-[30%] shadow-xl`}
        />
        <Btn
          title="YOU CAN QUIT"
          content="흡연자들의 금연을 돕는 커뮤니티입니다."
          state="yes"
        />
      </div>
    </div>
  );
}
