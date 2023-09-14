import { useState } from "react";
import EmployeeStatus from "./components/EmployeeStatus";
import collect from "collect.js";
import { supabase } from "./supabase/supabaseClient";

const Today = ({ employees }: any) => {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleSearch = (e: any) => {
    const filteredPersons = employees.filter((person: any) => {
      return (
        person.first_name.toLowerCase().includes(e.toLowerCase()) ||
        person.last_name.toLowerCase().includes(e.toLowerCase())
      );
    });
    setFilteredEmployees(filteredPersons);
  };

  const handleSort = (mode: any) => {
    const collection = collect(employees);
    if (mode === "present") {
      const sorted = collection.sortByDesc("today");
      setFilteredEmployees(sorted);
    } else {
      const sorted = collection.sortBy("today");
      setFilteredEmployees(sorted);
    }
  };

  // save record uses this function
  const insertRecord = async (emp: any) => {
    const { data, error } = await supabase
      .from("records")
      .insert([{ employee_id: emp.id, status: emp.today }])
      .select();
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  // reset today status in employee
  const resetForTomorrow = async (id: number) => {
    const { data, error } = await supabase
      .from("employees")
      .update([
        {
          today: false,
        },
      ])
      .eq("id", id)
      .select();
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  return (
    <main className="flex items-center justify-center h-full">
      <div className="flex flex-grow w-full h-full">
        <section className="w-full px-4 py-12 sm:px-6 lg:px-4">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-base font-bold text-indigo-600 dark:text-white">
              This is where you can save the record of
            </h2>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-sky-400 md:text-4xl lg:text-5xl font-heading">
              Today
            </h1>
          </div>

          <div className="relative flex flex-col items-center justify-between gap-2 my-6 lg:flex-row">
            {/* Search Bar */}
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                name="search"
                id="search"
                className="px-2 py-1 bg-white border-2 rounded-md sm:w-2/3 md:w-full border-violet-400 dark:border-sky-400 focus:border-slate-700 focus:outline-none focus:ring-0 dark:text-white dark:bg-black dark:focus:border-slate-300 placeholder:text-sm contrast-more:placeholder-slate-500"
                placeholder={"Search Employee"}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2 text-sm">
              <p className="min-w-max">Sort by :</p>
              <label className="cursor-pointer label">
                <span className="">Present</span>
                <input
                  type="radio"
                  value={"present"}
                  name="radio-10"
                  className="ml-1 border border-violet-600 dark:border-sky-400 radio checked:bg-violet-400 dark:checked:bg-sky-400"
                  onChange={(e) => handleSort(e.target.value)}
                />
              </label>
              <label className="cursor-pointer label">
                <span className="min-w-max">Absent</span>
                <input
                  type="radio"
                  name="radio-10"
                  value={"absent"}
                  className="ml-1 border border-violet-600 dark:border-sky-400 radio checked:bg-violet-400 dark:checked:bg-sky-400"
                  onChange={(e) => handleSort(e.target.value)}
                />
              </label>
            </div>

            <div className="flex gap-4">
              <button
                className="px-6 py-2 font-semibold leading-5 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none dark:bg-sky-400 dark:hover:bg-sky-500 dark:text-black"
                onClick={() => {
                  employees.forEach((emp: any) => {
                    insertRecord(emp);
                  });
                }}
              >
                Save Record
              </button>

              <button
                className="px-6 py-2 font-semibold leading-5 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none dark:bg-sky-400 dark:hover:bg-sky-500 dark:text-black"
                onClick={() => {
                  employees.forEach((emp: any) => {
                    resetForTomorrow(emp.id);
                  });
                }}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {filteredEmployees.map((employee: any) => (
              <EmployeeStatus key={employee.id} employee={employee} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Today;
