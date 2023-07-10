import collect from "collect.js";
import EmployeeProfile from "./EmployeeProfile";
import { useState } from "react";

const Employees = ({ employees }: any) => {
  // collect data
  const collection = collect(employees);
  // sort function
  const sorted = (mode: any) => {
    return collection.sortBy(mode);
  };
  const [sortedEmployees, setSortedEmployees] = useState(employees);

  return (
    <main className="flex items-center justify-center h-full">
      <div className="flex flex-grow w-full h-full">
        <section className="w-full px-4 py-12 sm:px-6 lg:px-4">
          {/* Header */}
          <div className="text-center ">
            <h2 className="text-base font-bold text-indigo-600 dark:text-white">
              This is where you can check all the
            </h2>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-sky-400 md:text-4xl lg:text-5xl font-heading">
              Employees
            </h1>
          </div>

          <div className="flex items-center justify-between my-6">
            {/* Search Bar */}
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                name="search"
                id="search"
                className="w-1/2 px-2 py-1 bg-white border-2 rounded-md sm:w-2/3 md:w-full border-violet-400 dark:border-sky-400 focus:border-slate-700 focus:outline-none focus:ring-0 dark:text-white dark:bg-black dark:focus:border-slate-300 placeholder:text-sm contrast-more:placeholder-slate-500"
                placeholder={"Search Employee"}
              />
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2 text-sm">
              <p className="min-w-max">Sort by :</p>
              <label className="cursor-pointer label">
                <span className="">ID</span>
                <input
                  type="radio"
                  value={"id"}
                  name="radio-10"
                  className="ml-1 border border-violet-600 dark:border-sky-400 radio checked:bg-violet-400 dark:checked:bg-sky-400"
                  onChange={(e) => setSortedEmployees(sorted(e.target.value))}
                />
              </label>
              <label className="cursor-pointer label">
                <span className="min-w-max">First Name</span>
                <input
                  type="radio"
                  name="radio-10"
                  value={"first_name"}
                  className="ml-1 border border-violet-600 dark:border-sky-400 radio checked:bg-violet-400 dark:checked:bg-sky-400"
                  onChange={(e) => setSortedEmployees(sorted(e.target.value))}
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {sortedEmployees.map((employee: any) => (
              <EmployeeProfile key={employee.id} employee={employee} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Employees;
