import { Link } from "react-router-dom";

const NavBtn = ({ img, title }: any) => {
  let dir = title.toString().toLowerCase();
  return (
    <li>
      <Link className="flex" to={`/${dir}`}>
        <img src={img} className="w-6 h-6" />
        <p className="hidden ml-4 md:block">{title}</p>
      </Link>
    </li>
  );
};

export default NavBtn;
