import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./Today";
import Attendance from "./Attendance";
import Employees from "./Employees";
import Home from "./Home";

function App() {
  return (
    <div className="flex h-screen">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
