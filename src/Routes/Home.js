import Info from "../Pages/Info";
import MainBar from "../Pages/MainBar";
import Projects from "../Pages/Projects";
import Techs from "../Pages/Techs";

export default function Home() {
  return (
    <div>
      <MainBar />
      <Techs />
      <Projects />
      <Info />
    </div>
  );
}
