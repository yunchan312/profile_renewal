import Home from "./Routes/Home";
import { Route, Routes } from "react-router-dom";
import Test from "./Routes/Test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
