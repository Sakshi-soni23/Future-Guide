import React from 'react'
import { NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-around  align-middle text-center gap-[2rem] w-[98rem]  h-[36px] bg-[#fffcfc]">
        <h1 className="text-[19px] font-bold font-sans cursor-pointer text-black">
          FUTURE BRIGHT
        </h1>
        <nav>
          <NavLink className=" ml-[10px] mr-[47px]" to={"/"}>
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
          <NavLink className="" to={"/Loginpage"}>
            Login <span className=""></span>
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Navbar