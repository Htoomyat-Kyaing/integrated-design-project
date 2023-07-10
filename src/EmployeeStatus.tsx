const EmployeeStatus = ({ employee }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-12 bg-white rounded-lg shadow-lg dark:bg-gray-900 min-w-max">
      <div className="mb-8">
        <div className="flex items-center justify-center rounded-full h-36 w-36">
          <img
            className={`object-cover object-center w-full h-full rounded-full`}
            src={`https://cbmasaqglquxmvqcfixl.supabase.co/storage/v1/object/public/images/${employee.first_name}_${employee.last_name}_${employee.id}.jpg`}
            alt="photo"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full text-center">
        <p className="mb-2 text-xl font-bold text-slate-800 dark:text-white">
          {employee.first_name} {employee.last_name}
        </p>
        <div className="flex items-center justify-between w-3/4 text-xl font-semibold text-slate-800 dark:text-slate-100">
          <p
            className={
              employee.today
                ? `flex items-center justify-center w-12 h-12 p-1 rounded-full bg-emerald-400 dark:bg-emerald-500`
                : `flex items-center justify-center w-12 h-12 p-1 rounded-full bg-slate-300 dark:bg-black`
            }
          >
            P
          </p>
          <p
            className={
              employee.today
                ? `flex items-center justify-center w-12 h-12 p-1 rounded-full bg-slate-300 dark:bg-black`
                : `flex items-center justify-center w-12 h-12 p-1 rounded-full bg-red-500 dark:bg-red-600`
            }
          >
            A
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStatus;
