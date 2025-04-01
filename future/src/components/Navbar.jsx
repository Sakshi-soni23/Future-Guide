import React from "react";
import { NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./Navbar.css";
import bgImage from "./images/bg.avif";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import aboutimg from "./images/aboutimg.jpg";

const Navbar = () => {
  return (
    <>
      <nav className=" main-nav">
        <div className="title ">
          <h1>
            <span>F</span>uture-
            <span>G</span>uide
          </h1>
        </div>
        <div className="menu-links col-span-[3/4] flex justify-around  max-[1000px]:hidden ">
          <NavLink className="text-center" to={"/"}>
            Home <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/Field"}>
            Field <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/Videos"}>
            Mentor-Video <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/Query"}>
            Query <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/FeedBack"}>
            FeedBack <span className=""></span>
          </NavLink>
          {/* <NavLink className="" to={"/Loginpage"}>
            Login <span className=""></span>
          </NavLink> */}
          <NavLink className="side-icon ">
            <PiDotsThreeOutlineVerticalLight />
          </NavLink>
        </div>
      </nav>
      <section className=" max-[1000px]:hidden">
        {bgImage ? (
          <img
            src={bgImage}
            alt="Background"
            className="main-img ml-[15rem] mt-[59px]
    w-[63rem]
    h-[67vh]  cursor-pointer  max-[1000px]:ml-[91px]
     max-[1000px]:w-[56rem]"
          />
        ) : null}
        <h1 className=" head -mt-[27rem] ml-[53rem]  w-[21rem] max-[1000px]:ml-[35rem] max-[1000px]:-mt-[25rem]">
          Shape Your Future By Choosing Correct Path Today !!
        </h1>
      </section>
      <div className="about">
        <h1 className="mt-[24rem] ml-[96vh] text-[3rem]"> ABOUT</h1>
        <div className="container-about">
        <div className="about-footer">
          
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
