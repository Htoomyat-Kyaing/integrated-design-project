import Nav from "./Nav";
import Dashboard from "./components/Dashboard";
import Home from "./Home";
import Today from "./Today";
import Records from "./Records";
import Employees from "./Employees";
import Production from "./Production";
import Analytics from "./Analytics";
import Settings from "./Settings";
import Help from "./Help";
import Alert from "./Alert";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import { useEmployeeStore } from "./context/EmployeeContext";
import { useRecordStore } from "./context/RecordContext";
import { useSessionStore } from "./context/SessionContext";

function App() {
  const { employees, getEmployees } = useEmployeeStore();
  const { records, getRecords } = useRecordStore();
  const { session, setSession } = useSessionStore();
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    document.documentElement.classList.add("dark");

    getEmployees();
    getRecords();

    // subscribing real time changes in both tables
    supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "employees" },
        (payload) => {
          console.log(payload.eventType);
          setEventType(String(payload.eventType));
          getEmployees();
        }
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "records" },
        (payload) => {
          console.log(payload.eventType);
          setEventType(String(payload.eventType));
          getRecords();
        }
      )
      .subscribe();

    // watching session change
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session: any) => {
      setSession(session);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEventType("");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [eventType]);

  return (
    <div className="flex w-screen h-screen">
      <BrowserRouter>
        {session !== null ? (
          <>
            <Nav />
            <div className="relative flex flex-col w-full h-full overflow-auto text-black dark:text-white bg-slate-200 dark:bg-slate-800">
              <Dashboard />

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

              {/* Notification for table changes */}
              <Alert eventType={eventType} />
            </div>
          </>
        ) : (
          // Supabase Auth
          <div className="flex items-center justify-center w-full h-full">
            <Auth
              providers={[]}
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme={localStorage.getItem("theme") || "dark"}
            />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
