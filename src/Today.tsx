import EmployeeStatus from "./EmployeeStatus";

const Today = ({ employees }: any) => {
  return (
    <main className="flex items-center justify-center h-full">
      <div className="flex flex-grow w-full h-full">
        <section className="w-full px-4 py-12 sm:px-6 lg:px-4">
          <div className="pb-12 text-center">
            <h2 className="text-base font-bold text-indigo-600 dark:text-white">
              This is where you can check who comes to work
            </h2>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-sky-400 md:text-4xl lg:text-5xl font-heading">
              Today
            </h1>
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
