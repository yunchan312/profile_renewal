import Home from "./Routes/Home";
import { Route, Routes } from "react-router-dom";
import ProflioDetail from "./Pages/ProfileDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/profile" element={<ProflioDetail />} />
      </Routes>
    </div>
  );
}

export default App;
