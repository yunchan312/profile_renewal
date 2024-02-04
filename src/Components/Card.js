import { useSetRecoilState } from "recoil";
import { ModalContents, ModalState } from "../atom";

export default function Card({ Icon, title, content, detail }) {
  const setIsModal = useSetRecoilState(ModalState);
  const setIsModalContent = useSetRecoilState(ModalContents);

  return (
    <div
      className="bg-white w-full py-3 px-10 h-24 flex justify-between items-center hover:cursor-pointer hover:scale-[1.01]"
      onClick={() => {
        setIsModalContent({
          title: title,
          content: content,
          detail: detail,
        });
        setIsModal((prev) => !prev);
      }}
    >
      <div className="flex items-center gap-3">
        <div className="text-[4vw]">{Icon}</div>
        <div className="text-[4vw]">{title}</div>
      </div>
      <div className="text-[4vw]">{">>"}</div>
    </div>
  );
}
