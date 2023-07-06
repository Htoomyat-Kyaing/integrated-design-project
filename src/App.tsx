import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./Today";
import Employees from "./Employees";
import Home from "./Home";
import Production from "./Production";
import Analytics from "./Analytics";
import Settings from "./Settings";
import Help from "./Help";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Record from "./Record";

const supabase = createClient(
  "https://cbmasaqglquxmvqcfixl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNibWFzYXFnbHF1eG12cWNmaXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNjY4OTgsImV4cCI6MjAwMzk0Mjg5OH0.pO0-_dEwjZeViEsPABf0l1M1wjXDgENB1XsmYcVULXg"
);

function App() {
  const darkToggle = (e: boolean) => {
    if (e) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  async function getEmployees() {
    const { data }: any = await supabase.from("employees").select();
    setEmployees(data);
  }

  return (
    <div className="flex h-screen">
      <BrowserRouter>
        <Nav />
        <div className="flex flex-col w-full h-full overflow-auto text-black dark:text-white bg-slate-200 dark:bg-slate-800">
          <Dashboard darkToggle={darkToggle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/today" element={<Today employees={employees} />} />
            <Route path="/record" element={<Record />} />
            <Route
              path="/employees"
              element={<Employees employees={employees} />}
            />
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
