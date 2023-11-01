import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./Today";
import Employees from "./Employees";
import Home from "./Home";
import Production from "./Production";
import Analytics from "./Analytics";
import Settings from "./Settings";
import Help from "./Help";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";
import Records from "./Records";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
import Alert from "./Alert";

function App() {
  const darkToggle = (e: boolean) => {
    if (e) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  const [employees, setEmployees] = useState([]);
  const [records, setRecords] = useState([]);
  // const [session, setSession] = useState(null);
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEventType("");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [eventType]);

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

    // supabase.auth.getSession().then(({ data: { session } }: any) => {
    //   setSession(session);
    // });
    // const {
    //   data: { subscription },
    // } = supabase.auth.onAuthStateChange((_event, session: any) => {
    //   setSession(session);
    // });
    // return () => {
    //   subscription.unsubscribe();
    // };
  }, []);

  return (
    <div className="flex w-screen h-screen">
      <BrowserRouter>
        {/* {session !== null ? (
          <> */}
        <Nav />
        <div className="relative flex flex-col w-full h-full overflow-auto text-black dark:text-white bg-slate-200 dark:bg-slate-800">
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
          <Alert eventType={eventType} />
        </div>
        {/* </>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <Auth
              providers={[]}
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme={localStorage.getItem("theme") || "dark"}
            />
          </div>
        )} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
