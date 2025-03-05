import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom';
import bgImage from "./images/bg.avif"
const Home = () => {
  return (
    <>
      <div className="container1 w-[64rem] h-[451px] border-3 border-none bg-white">
        {bgImage ? (
          <img
            src={bgImage}
            alt="Background"
            className="w-[63rem] h-[65vh] ml-[8px] cursor-pointer"
          />
        ) : null}
        <h1 className=" head">
          Shape Your Future By Choosing Correct Path Today !!
        </h1>
        {/* <NavLink to={"/Loginpage"}>
          <button className="border-none p-[8px] ml-[96vh] mt-[32px] w-[73px]  bg-transparent rounded-2xl cursor-pointer">
            Login
          </button>
        </NavLink> */}
      </div>
    </>
  );
}

export default Home 