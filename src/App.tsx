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
import { supabase } from "./supabase/supabaseClient";
import Records from "./Records";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";

function App() {
  const darkToggle = (e: boolean) => {
    if (e) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  const [employees, setEmployees] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      let { data: employees }: any = await supabase
        .from("employees")
        .select("*");
      setEmployees(employees);
    };
    const getRecords = async () => {
      let { data: records }: any = await supabase
        .from("records")
        .select(`*,employees(*)`);
      setRecords(records);
    };
    getEmployees();
    getRecords();
    // realtime subscribe
    supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "employees" },
        (payload) => {
          console.log(payload.eventType);
          getEmployees();
        }
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "records" },
        (payload) => {
          console.log(payload.eventType);
          getRecords();
        }
      )
      .subscribe();
  }, []);

  return (
    <div className="flex h-screen">
      <BrowserRouter>
        <Nav />
        <div className="flex flex-col w-full h-full overflow-auto text-black dark:text-white bg-slate-200 dark:bg-slate-800">
          <Dashboard darkToggle={darkToggle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="today" element={<Today employees={employees} />} />
            <Route path="records" element={<Records records={records} />} />
            <Route
              path="employees"
              element={<Employees employees={employees} />}
            />
            <Route path="production" element={<Production />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />}>
              <Route index element={<AddEmployee />} />
              <Route path="add" element={<AddEmployee />} />
              <Route
                path="edit"
                element={<EditEmployee employees={employees} />}
              />
              <Route
                path="delete"
                element={<DeleteEmployee employees={employees} />}
              />
            </Route>
            <Route path="help" element={<Help />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
