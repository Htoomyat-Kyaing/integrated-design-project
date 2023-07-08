import employee_placeholder from "./assets/unknown_employee.png";

const EmployeeStatus = ({ employee }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-12 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <div className="mb-8">
        <div
          className={`flex items-center justify-center p-1 rounded-full h-36 w-36`}
        >
          <img
            className=""
            src={employee_placeholder}
            alt="photo"
            loading="lazy"
          />
        </div>
      </div>
      <div className="">
        <p>
          {employee.first_name} {employee.last_name}
        </p>
        <p className="">P</p>
        <p className="">A</p>
      </div>
    </div>
  );
};

export default EmployeeStatus;
