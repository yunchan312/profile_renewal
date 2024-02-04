import { useSetRecoilState, useRecoilValue } from "recoil";
import { ModalContents, ModalState } from "../atom";

export default function CustomModal() {
  const setIsModal = useSetRecoilState(ModalState);
  const modalContent = useRecoilValue(ModalContents);

  return (
    <div
      className="left-0 top-0 z-50 fixed bg-black bg-opacity-50 w-[99vw] h-[100vh] flex justify-center items-center"
      onClick={() => setIsModal((prev) => !prev)}
    >
      <div className="bg-white w-[50%] h-[50%] flex flex-col items-center">
        <div className="text-slate-400 text-left w-[90%] font-bold text-[3vw]">
          #{modalContent.title}
        </div>
        <div className="bg-slate-400 p-10 w-[90%] h-[80%] text-white flex justify-center items-center">
          <div className="gap-5 text-[3vw] text-white">
            {modalContent.content}
          </div>
        </div>
        {modalContent.detail ? (
          <div className="text-right w-[90%] text-slate-400 font-bold text-[3vw]">
            #{modalContent.detail}
          </div>
        ) : null}
      </div>
    </div>
  );
}
