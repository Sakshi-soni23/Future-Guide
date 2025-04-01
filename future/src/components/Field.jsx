import React from "react";
import "./Field.css";
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import multimedia from "./multimedia";
import MenuItem from "./MenuItem"; // Corrected import
import bgImg from "./images/back.jpg";
const Field = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="field-navbar flex justify-around items-center text-center bg-transparent h-[50px] cursor-pointer text-black">
        <div className="field-h flex items-center gap-2 ">
          <div className="back max-[900px]:ml-[10rem]" onClick={handleGoBack}>
            <MdArrowBack />
          </div>
          <h1 className="max-[900px]:ml-[10rem]">Fields</h1>
        </div>
        <nav className="field-nav max-[700px]:hidden">
          <ul className="field-ul flex gap-[2rem] mt-[10px] cursor-pointer">
            {multimedia.map((menu, index) => (
              <MenuItem items={menu} key={index} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="below-part cursor-pointer">
        <img src={bgImg} alt="" className="w-[98rem] h-[93vh]" />
      </div>
    </>
  );
};

export default Field;
