const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul
      className={`dropdown absolute left-0 mt-2  shadow-lg rounded-md transition-all duration-200 ease-in-out ${
        dropdown ? "block" : "hidden"
      }`}
    >
      {submenus.map((submenu, index) => (
        <li className="menu-items" key={index}>
          <a
            href="/#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            {submenu.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
