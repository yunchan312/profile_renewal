export default function Btn({ name, techs }) {
  return (
    <div className="hover:bg-gray-300 p-5 flex items-center gap-10 rounded hover:cursor-pointer">
      <div className="w-1/2">{name}</div>
      <div className="flex gap-5">
        {techs.map((icons) => (
          <>{icons}</>
        ))}
      </div>
    </div>
  );
}
