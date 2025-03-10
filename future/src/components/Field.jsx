import React from "react";
import "./Field.css";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import multimedia from "./multimedia";
import MenuItem from "./MenuItem"; // Corrected import

const Field = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="field-navbar flex justify-around items-center text-center bg-[#CA8787] h-[50px] cursor-pointer">
        <div className="field-h flex items-center gap-2">
          <div className="back" onClick={handleGoBack}>
            <MdArrowBack />
          </div>
          <h1>Fields</h1>
        </div>
        <nav className="field-nav">
          <ul className="field-ul flex gap-[2rem] mt-[10px] cursor-pointer">
            {multimedia.map((menu, index) => (
              <MenuItem items={menu} key={index} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Field;
