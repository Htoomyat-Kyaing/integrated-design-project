import { Link } from "react-router-dom";
import icon from "./assets/icon.svg";
const Nav = () => {
  return (
    <nav className="flex flex-col items-center justify-between h-full text-center border-r w-max border-r-black">
      <Link to={`/`}>
        <img src={icon} alt="employee icon" className="w-12 h-12" />
      </Link>

      {/* need to work on NavBtn */}
      <ul>
        <li>
          <Link to={`/today`}>Today</Link>
        </li>
        <li>
          <Link to={`/attendance`}>Attendance</Link>
        </li>
        <li>
          <Link to={`/employees`}>Employees</Link>
        </li>
      </ul>

      <div>
        <p>Help</p>
        <p>Employee Management System</p>
      </div>
    </nav>
  );
};

export default Nav;
