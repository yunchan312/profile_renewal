export default function Card({ Icon, title }) {
  return (
    <div className="bg-white w-full py-3 px-10 h-24 flex justify-between items-center hover:cursor-pointer hover:scale-[1.01]">
      <div className="flex items-center gap-3">
        <div className="text-[4vw]">{Icon}</div>
        <div className="text-[4vw]">{title}</div>
      </div>
      <div className="text-[4vw]">{">>"}</div>
    </div>
  );
}
