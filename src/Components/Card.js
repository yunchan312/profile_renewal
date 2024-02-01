export default function Card({ Icon, title, content }) {
  return (
    <div className="bg-white w-full py-3 px-10 h-24 flex flex-col justify-center rounded-xl shadow-2xl hover:cursor-pointer hover:scale-[1.1]">
      <div className="flex gap-3">
        <div className="text-4xl">{Icon}</div>
        <div className="text-2xl">{title}</div>
      </div>
      <div className="pl-2">{content ? content : "-"}</div>
    </div>
  );
}
