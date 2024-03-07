import { useNavigate } from "react-router-dom";
export default function Btn({ title, content, state, nav }) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/project/${nav}`);
  };
  return (
    <>
      <div className="w-[40%]">
        <div className="text-3xl font-bold">{title}</div>
        <div className="">{content}</div>
        <span
          className="text-2xl font-bold text-gray-300 hover:cursor-pointer hover:shadow-lg py-2 pr-8"
          onClick={handleOnClick}
        >
          {state ? "작업중입니다." : "See Details"}
        </span>
      </div>
    </>
  );
}
