import Home from "./Routes/Home";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Test from "./Routes/Test";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
