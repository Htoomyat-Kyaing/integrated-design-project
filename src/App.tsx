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
import Dashboard from "./Dashboard";

function App() {
  const darkToggle = (e: boolean) => {
    if (e) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <div className="flex h-screen">
      <BrowserRouter>
        <Nav />
        <div className="flex flex-col w-full h-full overflow-auto text-black dark:text-white bg-slate-200 dark:bg-slate-800">
          <Dashboard darkToggle={darkToggle} />
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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
