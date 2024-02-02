import Info from "../Components/Info";
import MainBar from "../Components/MainBar";
import Projects from "../Components/Projects";
import Techs from "../Components/Techs";

export default function Home() {
  return (
    <div>
      <MainBar />
      <Techs />
      <Info />
    </div>
  );
}
