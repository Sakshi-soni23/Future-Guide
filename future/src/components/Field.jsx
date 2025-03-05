import React from 'react'
import "./Field.css"
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Field = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="back  border-2 border-black w-[38px] h-[21px]" onClick={handleGoBack}>
        <MdArrowBack />
      </div>
      
    </>
  );
}

export default Field
;