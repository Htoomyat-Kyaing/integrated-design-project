import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import icon_today from "./assets/calendar.png";
import icon_record from "./assets/attendance.png";
import icon_employees from "./assets/employees.png";
import icon_production from "./assets/factory.png";
import icon_analytics from "./assets/hand.png";
import icon_settings from "./assets/gears.png";
import icon_help from "./assets/question_mark.png";
import NavBtn from "./components/NavBtn";

const Nav = () => {
  return (
    <nav className="flex flex-col justify-between h-full px-3 text-white md:px-6 min-w-max bg-gradient-to-b from-blue-400 to-violet-600">
      {/* need to change to navbtn component */}
      <div className="flex flex-col items-center h-screen">
        <Link to={`/`}>
          <img src={logo} alt="logo.png" className="w-12 h-12 my-6" />
        </Link>

        <ul className="flex flex-col justify-between h-full gap-4 my-4">
          <div className="flex flex-col items-center justify-between gap-4 md:items-start">
            <NavBtn img={icon_today} title={"Today"} />
            <NavBtn img={icon_record} title={"Records"} />
            <NavBtn img={icon_employees} title={"Employees"} />
            <NavBtn img={icon_production} title={"Production"} />
            <NavBtn img={icon_analytics} title={"Analytics"} />
            <NavBtn img={icon_settings} title={"Settings"} />
          </div>

          <NavBtn img={icon_help} title={"Help"} />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
