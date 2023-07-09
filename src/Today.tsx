import EmployeeStatus from "./EmployeeStatus";

const Today = ({ employees }: any) => {
  return (
    <main className="flex items-center justify-center h-full">
      <div className="flex flex-grow w-full h-full">
        <section className="w-full px-4 py-12 sm:px-6 lg:px-4">
          <div className="text-center">
            <h2 className="text-base font-bold text-indigo-600 dark:text-white">
              This is where you can save the record of
            </h2>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-sky-400 md:text-4xl lg:text-5xl font-heading">
              Today
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center justify-between gap-2 my-6">
            <input
              type="text"
              name="search"
              id="search"
              className="px-2 py-1 bg-white border-2 rounded-md border-violet-400 dark:border-sky-400 focus:border-slate-700 focus:outline-none focus:ring-0 dark:text-white dark:bg-black dark:focus:border-slate-300 placeholder:text-sm contrast-more:placeholder-slate-500"
              placeholder="Search Employee"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute w-4 h-4 left-[183px] text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <button className="px-6 py-2 font-semibold leading-5 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none dark:bg-sky-400 dark:hover:bg-sky-500 dark:text-black">
              Save Record
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {employees.map((employee: any) => (
              <EmployeeStatus key={employee.id} employee={employee} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Today;
