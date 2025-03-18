import { useNavigate } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {
  const navigate = useNavigate();

  // Navigate based on submenu title
   const handleNavigation = (title) => {
     if (title === "PCM") navigate("/components/pcm");
     if (title === "PCB") navigate("/components/pcb");
     if (title === "Commerce") navigate("/components/commerce");
   };

  };

  return (
    <ul
      className={`dropdown absolute left-0 mt-2 shadow-lg rounded-md transition-all duration-200 ease-in-out ${
        dropdown ? "block" : "hidden"
      }`}
    >
      {submenus.map((submenu, index) => (
        <li
          className="menu-items"
          key={index}
          onClick={() => handleNavigation(submenu.title)}
        >
          <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer">
            {submenu.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
