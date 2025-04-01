import React from 'react';
import "./Pcm.css";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import pcmimg from "./images/pcm.avif";
import eleimg from "./images/elextrical.avif";
import civilimg from "./images/civil.avif";
import mechanicalimg from "./images/mechanical.avif";
import computerimg from "./images/computer.avif";
const Pcm = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  useEffect (()=>{
Aos.init({ duration: 1000, once: false });
  },[])
  return (
    <>
      <div className="main-pcm flex justify-evenly align-middle text-center">
        <div className="back -ml-[22rem] mt-[2rem]" onClick={handleGoBack}>
          <MdArrowBack />
        </div>
        <div className="pcm-head" data-aos="fade-down-right">
          <h1 className="text-black text-[35px]">WELCOME TO PCM PAGE</h1>
          <span>
            Diverse Excciting Opportunities in Engineering , Technology and more
            after Physic , Chemistry ,Math
          </span>
        </div>
      </div>
      <div className="choice-pcm">
        <h1 className="question">why to choose pcm?</h1>
        <li className="ans">
          Wide Career Opportunities: – Opens doors to engineering, architecture,
          computer science, data science, and more.
        </li>
        <li className="ans">
          Strong Analytical Skills: – Enhances problem-solving, logical
          thinking, and analytical reasoning abilities.
        </li>
        <li className="ans">
          Competitive Exam Preparation: – Required for exams like JEE, NDA,
          NATA, and other technical entrance tests.
        </li>
        <li className="ans">
          Gateway to Prestigious Careers: – Essential for careers in technology,
          research, space science, and defense services.
        </li>
      </div>

      <div
        className="card1  relative card flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[12rem] mt-[35px] rounded-2xl cursor-pointer overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="pcmimg">
          <img src={computerimg} alt="" className="pcm-img" />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[30px] text-center font-serif">
            Computer Science
          </h1>
          <p className="detail -mt-[15px]">
            <li className="text-[16px] ml-[1px]">
              Focuses on designing, developing, and maintaining computer
              software and systems.
            </li>
            <li className="text-[16px] ml-[1px]">
              Combines principles of programming, mathematics, and
              problem-solving.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a key role in emerging fields like artificial intelligence,
              cybersecurity, and cloud computing.
            </li>
            <li className="text-[16px] ml-[1px]">
              Involves understanding both hardware and software interactions.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives innovation through technologies like machine learning,
              blockchain, and big data
            </li>
          </p>
        </div>
    <link rel="stylesheet" href="" />
            <button
              className=" btn border-2 rounded-2xl border-black w-[122px] p-1 -ml-[24rem]
    mt-[10rem] bg-amber-500"
            >
              Read More
            </button>
          </div>
      <div
        className="card2 flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[44rem] mt-[35px] rounded-2xl cursor-pointer"
        data-aos="fade-up"
        data-aos-duration="3000"
        aos_offset="100"
      >
        <div className="pcmimg">
          <img src={eleimg} alt="" className="pcm-img" />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[30px] text-center font-serif">
            Electrical Engineering
          </h1>
          <p className="detail -mt-[15px]">
            <li className="text-[16px] ml-[1px]">
              Focuses on designing, developing, and maintaining electrical
              systems and devices.
            </li>
            <li className="text-[16px] ml-[1px]">
              Involves the study of electricity, electromagnetism, and
              electronics.
            </li>
            <li className="text-[16px] ml-[1px]">
              Covers a wide range of applications from power generation to
              advanced communication systems.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a crucial role in industries like energy,
              telecommunications, and automation.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives innovation in renewable energy, smart grids, and electric
              vehicles (EVs).
            </li>
          </p>
        </div>
      </div>

      <div
        className="card3 flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[12rem] mt-[35px] rounded-2xl cursor-pointer"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="pcmimg">
          <img src={mechanicalimg} alt="" className="pcm-img" />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[27px] text-center font-serif">
            Mechanical Engineering
          </h1>
          <p className="detail -mt-[15px]">
            <li className="text-[16px] ml-[1px]">
              Focuses on the design, analysis, manufacturing, and maintenance of
              mechanical systems.
            </li>
            <li className="text-[16px] ml-[1px]">
              Involves the study of mechanics, thermodynamics, fluid dynamics,
              and materials science.
            </li>
            <li className="text-[16px] ml-[1px]">
              Applies engineering principles to develop machines, engines, and
              tools.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a vital role in industries like automotive, aerospace,
              robotics, and manufacturing.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives innovation in advanced manufacturing, renewable energy, and
              automation technologies.
            </li>
          </p>
        </div>
      </div>
      <div
        className="card4 flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[44rem] mt-[35px] rounded-2xl cursor-pointer"
        data-aos="fade-up"
        data-aos-duration="6000"
      >
        <div className="pcmimg">
          <img src={civilimg} alt="" className="pcm-img" />
        </div>
        <div className="cards-detail">
          <h1 className="title text-[30px] text-center font-serif">
            Civil Engineering
          </h1>
          <p className="detail -mt-[15px]">
            <li className="text-[16px] ml-[1px]">
              Focuses on the design, construction, and maintenance of
              infrastructure and public works.
            </li>
            <li className="text-[16px] ml-[1px]">
              Involves the study of structures, materials, and environmental
              sustainability.
            </li>
            <li className="text-[16px] ml-[1px]">
              Covers projects like roads, bridges, buildings, dams, and water
              supply systems.
            </li>
            <li className="text-[16px] ml-[1px]">
              Plays a crucial role in urban development, disaster management,
              and environmental protection.
            </li>
            <li className="text-[16px] ml-[1px]">
              Drives innovation in smart cities, green building technologies,
              and sustainable infrastructure.
            </li>
          </p>
        </div>
      </div>
    </>
  );
}

export default Pcm