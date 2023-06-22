import { Link } from "react-router-dom";

const NavBtn = ({ img, title }: any) => {
  let dir = title.toString().toLowerCase();
  return (
    <li className="flex">
      <img src={img} className="w-6 h-6 mr-4" />
      <Link to={`/${dir}`}>{title}</Link>
    </li>
  );
};

export default NavBtn;
