import { NavLink, useNavigate } from "react-router-dom";


const Dropdown = ({ submenus, dropdown }) => {
   const handleNavigation = (path) => {
      navigate(path);
   };
  return (
    <ul
      className={`dropdown absolute left-0 mt-2 shadow-lg rounded-md transition-all duration-200 ease-in-out ${
        dropdown ? "block" : "hidden"
      }`}
    >
      {submenus.map((submenu, index) => (
        <NavLink to={submenu.path} key={index}>
          <li className="menu-items">
            <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer">
              {submenu.title}
            </span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default Dropdown;
