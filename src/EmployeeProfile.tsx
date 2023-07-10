import no_profile from "./assets/unknown_employee.png";

const EmployeeProfile = ({ employee }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-12 bg-white rounded-lg shadow-lg dark:bg-black">
      {/* Profile Image */}
      <div className="flex items-center justify-center p-1 mb-8 rounded-full bg-gradient-to-b from-blue-400 to-violet-600 h-36 w-36">
        <img
          className="object-cover object-center w-full h-full p-1 bg-white rounded-full dark:bg-slate-900"
          src={no_profile}
          alt="Employee photo"
          loading="lazy"
        />
      </div>

      {/* Info */}
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
