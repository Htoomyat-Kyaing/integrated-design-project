import { Link } from "react-router-dom";

const NavBtn = ({ title }: any) => {
  return (
    <>
      <li>
        <Link to={`/`}>{title}</Link>
      </li>
    </>
  );
};

export default NavBtn;
