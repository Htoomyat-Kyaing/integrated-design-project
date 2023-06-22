import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./Today";
import Attendance from "./Attendance";
import Employees from "./Employees";
import Home from "./Home";
import Production from "./Production";
import Analytics from "./Analytics";
import Settings from "./Settings";
import Help from "./Help";

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
          <Route path="/production" element={<Production />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
