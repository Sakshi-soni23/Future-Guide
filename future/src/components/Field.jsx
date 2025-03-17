import React from "react";
import "./Field.css";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import multimedia from "./multimedia";
import MenuItem from "./MenuItem"; // Corrected import
import SUbimg from "./images/after pcm.avif";
import arts from "./images/arts.jpeg";
import gov from "./images/govt.jpeg";
import pcm from "./images/pcm.avif";
import pcb from "./images/pcb.jpeg";
import com from "./images/comerece.webp";
const Field = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="field-navbar flex justify-around items-center text-center bg-[#CA8787] h-[50px] cursor-pointer">
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
        <div className="img flex justify-around">
          <img src={SUbimg} alt="" />
          <img src={arts} alt="" />
          <img src={pcm} alt="" />
        </div>
        <div className="img2 flex justify-around gap-[3rem]">
          <img src={pcb} alt="" />
          <img src={gov} alt="" />
          <img src={com} alt="" />
        </div>
      </div>
    </>
  );
};

export default Field;
