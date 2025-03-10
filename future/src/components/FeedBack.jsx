import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const FeedBack = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
  <>
   <div className="back  border-2 border-black w-[38px] h-[21px] mt-[1rem] ml-[2rem] cursor-pointer" onClick={handleGoBack}>
          <MdArrowBack />
        </div>
  </>
  )
}

export default FeedBack
