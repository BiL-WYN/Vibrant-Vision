import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";
import { FaHome, FaQuestionCircle, FaInfoCircle, FaSearch } from "react-icons/fa";
import "./NavBar.css";

type NavItem = {
  name: string;
  path: string;
  icon: IconType;
};

// add new pages here as needed
const navItems: NavItem[] = [
  {
    name: "Dashboard",
    path: "/home",
    icon: FaHome,
  },
  {
    name: "How To",
    path: "/howto",
    icon: FaQuestionCircle,
  },
  {
    name: "About Us",
    path: "/aboutUs",
    icon: FaInfoCircle,
  },
  {
    name: "Search",
    path: "/search",
    icon: FaSearch,
  },

];

const NavBar = () => (
  <nav className="navbar">
    {navItems.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <Icon size={30} color="yellow" />
          <span>{item.name}</span>
        </NavLink>
      );
    })}
  </nav>
);

export default NavBar;
