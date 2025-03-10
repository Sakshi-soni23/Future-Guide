import { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItem = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className="relative">
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className="px-2 py-1"
          >
            {items.title}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href="/#" className="px-2 py-1 bg-[#f3f3f3] rounded-md">
          {items.title}
        </a>
      )}
    </li>
  );
};

export default MenuItem;
