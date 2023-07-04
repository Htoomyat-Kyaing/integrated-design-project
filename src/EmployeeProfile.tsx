const EmployeeProfile = ({ employee }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-12 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <div className="mb-8">
        <img
          className="object-cover object-center rounded-full h-36 w-36"
          src="/src/assets/unknown_employee.png"
          alt="photo"
        />
      </div>
      <div className="text-center">
        <p className="mb-2 text-xl font-bold text-violet-600 dark:text-white">
          {employee.first_name} {employee.last_name}
        </p>
        <p className="text-base font-normal text-slate-800 dark:text-sky-400">
          {employee.position}
        </p>
      </div>
    </div>
  );
};

export default EmployeeProfile;
