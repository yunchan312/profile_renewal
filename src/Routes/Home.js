import Info from "../Pages/Info";
import MainBar from "../Pages/MainBar";
import Projects from "../Pages/Projects";
import Techs from "../Pages/Techs";
import ScrollSize from "./Test/scrollx";

export default function Home() {
  return (
    <div>
      <MainBar />
      <ScrollSize />
      <Techs />
      <Projects />
      <Info />
    </div>
  );
}
