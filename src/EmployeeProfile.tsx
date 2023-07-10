const EmployeeProfile = ({ employee }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-12 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <div className="mb-8">
        <div className="flex items-center justify-center p-1 rounded-full bg-gradient-to-b from-blue-400 to-violet-600 h-36 w-36">
          <img
            className="object-cover object-center w-full h-full bg-white rounded-full dark:bg-slate-900"
            src={`https://cbmasaqglquxmvqcfixl.supabase.co/storage/v1/object/public/images/${employee.first_name}_${employee.last_name}_${employee.id}.jpg`}
            alt="Employee photo"
            loading="lazy"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="mb-2 text-xl font-bold text-violet-600 dark:text-white">
          {employee.first_name} {employee.last_name} #{employee.id}
        </p>
        <p className="mb-2 text-base font-normal text-slate-800 dark:text-sky-400">
          Age : {employee.age}
        </p>
        <p className="mb-2 text-base font-normal text-slate-800 dark:text-sky-400">
          {employee.position}
        </p>
      </div>
    </div>
  );
};

export default EmployeeProfile;
