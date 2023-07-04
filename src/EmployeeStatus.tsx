import employee_placeholder from "./assets/unknown_employee.png";

const EmployeeStatus = ({ employee }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-12 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <div className="">
        <img className="" src={employee_placeholder} alt="photo" />
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
