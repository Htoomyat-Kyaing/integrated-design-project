import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import icon_today from "./assets/calendar.png";
import icon_attendance from "./assets/attendance.png";
import icon_employees from "./assets/employees.png";
import icon_production from "./assets/factory.png";
import icon_analytics from "./assets/hand.png";
import icon_settings from "./assets/gears.png";
import NavBtn from "./NavBtn";

const Nav = () => {
  return (
    <nav className="flex flex-col justify-between h-full text-white w-max bg-gradient-to-b from-blue-400 to-violet-600">
      {/* need to change to navbtn component */}
      <div className="flex flex-col items-center w-48">
        <Link to={`/`}>
          <img src={logo} alt="logo.png" className="w-12 h-12 my-6" />
        </Link>

        <ul className="flex flex-col gap-4 mt-4">
          <NavBtn img={icon_today} title={"Today"} />
          <NavBtn img={icon_attendance} title={"Attendance"} />
          <NavBtn img={icon_employees} title={"Employees"} />
          <NavBtn img={icon_production} title={"Production"} />
          <NavBtn img={icon_analytics} title={"Analytics"} />
          <NavBtn img={icon_settings} title={"Settings"} />
        </ul>
      </div>

      <div className="mb-4 text-center">
        <Link to={`/help`}>
          <p className="font-semibold leading-6">Help</p>
        </Link>
        <p className="text-xs">Employee Management System</p>
      </div>
    </nav>
  );
};

export default Nav;
